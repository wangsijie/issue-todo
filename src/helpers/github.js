import moment from 'moment';
import { $get, $patch, $post, $delete, $put } from './remote';
import { parseMeta, stringifyMeta } from './util';

export const fetchIssues = async () => {
    try {
        let result = [];
        let page = 1;
        while (true) {
            const [issues, link] = await $get(
                `/issues`,
                { direction: 'asc', _: new Date().getTime(), page },
                { throwException: true, headerLink: true }
            );
            result = [
                ...result,
                ...issues.map(issue => ({
                    ...issue,
                    meta: parseMeta(issue.body),
                })).filter(issue => {
                    if (issue.meta.postpone && issue.meta.postpone.isAfter(moment())) {
                        return false;
                    }
                    return true;
                }),
            ];
            const pageFinder = /&page=(\d)>;\srel="next"/.exec(link);
            if (pageFinder) {
                page = pageFinder[1];
            } else {
                break;
            }
        }
        return result;
    } catch (e) {
        if (e.response && [401, 404].includes(e.response.status)) {
            localStorage.removeItem('issue-todo-token');
            localStorage.removeItem('issue-todo-repo');
            window.location.reload();
        } else {
            throw e;
        }
    }
};

export const fetchLabels = () => $get(`/labels`, { _: new Date().getTime() });

export const closeIssue = async (id) => $patch(`/issues/${id}`, { state: 'close' });

export const addIssue = ({ title }) => $post('/issues', { title });

export const addLabel = (names, issueNumber) => $post(
    `/issues/${issueNumber}/labels`,
    { labels: Array.isArray(names) ? names : [names] }
);

export const deleteLabel = (name, issueNumber) => $delete(`/issues/${issueNumber}/labels/${name}`);

export const updateIssueLabels = (number, labels) => $put(
    `/issues/${number}/labels`,
    {
        labels: labels.map(label => label.name),
    }
);

export const updateIssue = (number, data) => $patch(
    `/issues/${number}`,
    data,
);

export const updateIssueMeta = (number, body, { postpone }) => {
    const meta = parseMeta(body);
    if (postpone) {
        meta.postpone = postpone;
    }
    const newBody = stringifyMeta(body, meta);
    return updateIssue(number, { body: newBody });
};
