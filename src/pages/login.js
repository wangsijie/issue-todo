import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';
import './login.less';

export default class Login extends Component {
    state = {
        token: '',
        repo: '',
    }
    onTokenChange = e => this.setState({ token: e.target.value });
    onRepoChange = e => this.setState({ repo: e.target.value });
    login = async () => {
        const { token, repo } = this.state;
        localStorage.setItem('issue-todo-token', token);
        localStorage.setItem('issue-todo-repo', /^\//.test(repo) ? repo : `/${repo}`);
        window.location.href = '/';
    }
    render() {
        const { token, repo } = this.state;
        return <div className="page-login">
            <div className="main">
                <Card title="Login">
                    <div className="form">
                        <div className="form-row">
                            <Input onChange={this.onTokenChange} value={token} placeholder="GitHub API token" />
                        </div>
                        <div className="form-row">
                            <Input onChange={this.onRepoChange} value={repo} placeholder="Repo address, e.g: wangsijie/todo" />
                        </div>
                        <div className="form-row">
                            <Button disabled={!token} onClick={this.login} type="primary">GO</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    }
}