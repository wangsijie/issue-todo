import {observable, action, computed} from 'mobx';
import { message } from 'antd';
import { fetchIssues, fetchLabels, closeIssue, addIssue, addLabel, deleteLabel } from '../helpers/github';

const isListLabel = label => /\[list\]/.test(label.description);

class Store {
    @observable issues = [];
    @observable labels = [];
    @observable initState = 'pending'; // "pending" / "done" / "error"
    @observable sidebarCollapsed = false;

    @action
    init = async () => {
        const issues = await fetchIssues();
        this.issues = issues;

        const labels = await fetchLabels();
        this.labels = labels;

        this.initState = 'done';
    }

    @action setSidebarCollapse = (value) => {
        this.sidebarCollapsed = value;
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

    @computed get computedIssues() {
        return this.issues.map(issue => {
            return {
                ...issue,
                $displayLabels: issue.labels.filter(o => o.name !== 'important'),
                $isImportant: issue.labels.some(o => o.name === 'important'),
            };
        });
    }
    
    @computed get nextActionIssues() {
        return this.computedIssues.filter(issue => {
            if (!issue.labels.length) {
                return false;
            }
            return !issue.labels.some(isListLabel);
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

//   @action addTodo = (todo) => { // 增
//     this.todos = [...this.todos, todo]
//   }

//   @action deleteTodo = (id) => { // 删
//     this.todos = this.todos.filter(item => {
//       return item.id !== id
//     })
//   }

//   @action completeTodo = (id) => { // 改
//     this.todos = this.todos.map(item => {
//       let obj = item.id === id ? {...item, isComplete: !item.isComplete} : item
//       return obj
//     })
//   }

//   @action searchTodo = (content) => { // 查
//     if (content === '') {
//       this.todos = list
//     } else {
//       this.todos = this.todos.filter(item => {
//         return item.content.indexOf(content) !== -1
//       })
//     }
//   }
}

export default new Store();
