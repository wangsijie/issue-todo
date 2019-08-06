import {observable, action, computed} from 'mobx';
import { message } from 'antd';
import {
    fetchIssues, fetchLabels, closeIssue, addIssue, addLabel, deleteLabel,
    updateIssueLabels,
} from '../helpers/github';

const isListLabel = label => /\[list\]/.test(label.description);

class Store {
    @observable issues = [];
    @observable labels = [];
    @observable initState = 'pending'; // "pending" / "done" / "error"
    @observable sidebarCollapsed = false;
    @observable rightBarCollapsed = false;
    @observable selectedIssueNumber = 0;
    @observable loading = false;

    @computed get displayLabels() {
        return this.labels.filter(o => o.name !== 'important');
    }

    @computed get computedIssues() {
        return this.issues.map(issue => {
            return {
                ...issue,
                $displayLabels: issue.labels.filter(o => o.name !== 'important'),
                $isImportant: issue.labels.some(o => o.name === 'important'),
                $selected: issue.number === this.selectedIssueNumber,
            };
        });
    }
    
    @computed get nextActionIssues() {
        return this.computedIssues.filter(issue => {
            if (!issue.$displayLabels.length) {
                return false;
            }
            return !issue.$displayLabels.some(isListLabel);
        });
    }

    @computed get inboxIssues() {
        return this.computedIssues.filter(issue => issue.$displayLabels.length === 0);
    }

    @computed get importantIssues() {
        return this.computedIssues.filter(issue => issue.$isImportant);
    }

    @computed get listIssues() {
        return this.computedIssues.filter(issue => issue.labels.some(isListLabel));
    }

    @computed get selectedIssue() {
        return this.computedIssues.find(issue => issue.number === this.selectedIssueNumber);
    }

    @action
    init = async () => {
        const issues = await fetchIssues();
        this.issues = issues;

        const labels = await fetchLabels();
        this.labels = labels;

        this.initState = 'done';
    }

    @action pushLoading = () => this.loading++;
    @action popLoading = () => this.loading--;

    @action setSidebarCollapse = (value) => {
        this.sidebarCollapsed = value;
    }

    @action setRightBarCollapse = (value) => {
        this.rightBarCollapsed = value;
    }

    @action closeIssue = (number) => {
        const issue = this.issues.find(o => o.number === number);
        if (!issue) {
            return message.error('Issue not found: #' + number);
        }
        closeIssue(number);
        this.issues = this.issues.map(issue => {
            if (issue.number !== number) {
                return issue;
            }
            return {
                ...issue,
                $closed: true,
            };
        });
    }

    @action addIssue = async ({ title }) => {
        const fakeNumber = new Date().getTime();
        this.issues.push({
            number: fakeNumber,
            title,
            labels: [],
            $displayLabels: [],
        });
        const issue = await addIssue({ title });
        this.issues = this.issues.map(o => {
            if (o.number !== fakeNumber) {
                return o;
            }
            return { ...o, ...issue };
        });
    }

    @action setIssueFlag = async (number, important = true) => {
        const label = this.labels.find(o => o.name === 'important');
        this.issues = this.computedIssues.map(issue => {
            if (issue.number !== number) {
                return issue;
            }
            if (important) {
                if (issue.$isImportant) {
                    return issue;
                }
                addLabel(label.name, issue.number);
                return {
                    ...issue,
                    labels: [...issue.labels, label],
                };
            } else {
                if (!issue.$isImportant) {
                    return issue;
                }
                deleteLabel(label.name, issue.number);
                return {
                    ...issue,
                    labels: issue.labels.filter(o => o.name !== 'important'),
                };
            }
        });
    }

    @action setSelectedIssueNumber = number => this.selectedIssueNumber = number;

    @action updateIssue = (number, data) => {
        this.issues = this.issues.map(issue => {
            if (issue.number === number) {
                if (data.labels) {
                    updateIssueLabels(number, data.labels);
                }
                return { ...issue, ...data };
            }
            return issue;
        });
    }
}

export default new Store();
