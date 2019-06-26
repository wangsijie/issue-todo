import React, { Component } from 'react';
import { fetchIssues } from '../helpers/github';

export default class Home extends Component {
    state = {
        issues: null,
    }
    componentDidMount() {
        this.fetch();
    }
    async fetch() {
        const issues = await fetchIssues();
        this.setState({ issues });
    }
    render() {
        const { issues } = this.state;
        return <div className="app-home">
            <ul>
                {
                    issues && issues.map(item => <li key={item.id}>
                        {item.title}
                    </li>)
                }
            </ul>
        </div>
    }
}
