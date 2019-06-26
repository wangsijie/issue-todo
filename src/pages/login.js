import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';
import './login.less';

export default class Login extends Component {
    state = {
        token: '',
    }
    onTokenChange = e => this.setState({ token: e.target.value });
    login = async () => {
        const { token } = this.state;
        localStorage.setItem('gist-token', token);
        window.location.href = '/';
    }
    render() {
        const { token } = this.state;
        return <div className="page-login">
            <div className="main">
                <Card title="登陆">
                    <div className="form">
                        <div className="form-row">
                            <Input onChange={this.onTokenChange} value={token} placeholder="输入gist api token" />
                            <Button disabled={!token} onClick={this.login} type="primary">登陆</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    }
}