import { $get } from './remote';

export const fetchIssues = async () => {
    const issues = await $get(`/issues?direction=asc`);
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
