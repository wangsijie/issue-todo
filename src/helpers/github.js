import { $get, $patch, $post, $delete, $put } from './remote';

export const fetchIssues = async () => {
    try {
        const issues = await $get(`/issues`, { direction: 'asc', _: new Date().getTime() }, { throwException: true });
        return issues;
    } catch (e) {
        if (e.response && [401, 404].includes(e.response.status)) {
            localStorage.removeItem('issue-todo-token');
            localStorage.removeItem('issue-todo-repo');
            window.location.reload();
        } else {
            throw e;
        }
    }
    // issues.forEach(issue => {
    //     const meta = parseMeta(issue.body);
    //     issue.meta = meta;
    // });
    // return issues.filter(issue => {
    //     if (issue.meta.postpone && issue.meta.postpone.isAfter(moment())) {
    //         return false;
    //     }
    //     return true;
    // });
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
