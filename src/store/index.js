import {observable, action} from 'mobx';
import { fetchIssues, fetchLabels } from '../helpers/github';

class Store {
    @observable issues = [];
    @observable labels = [];
    @observable initState = 'pending'; // "pending" / "done" / "error"

    @action
    init = async () => {
        const issues = await fetchIssues();
        this.issues = issues;

        const labels = await fetchLabels();
        this.labels = labels;

        this.initState = 'done';
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
