import { $get, $patch, $post, $delete, $put } from './remote';

export const fetchIssues = async () => {
    const issues = await $get(`/issues`, { direction: 'asc' }, { hideLoading: true });
    return issues;
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

export const fetchLabels = () => $get('/labels', {}, { hideLoading: true });

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
