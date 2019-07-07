import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { isLogin } from './helpers/remote';
import Home from './pages/home';
import Login from './pages/login';
import './app.less';

@observer
class App extends React.Component {
	static contextTypes = {
        store: PropTypes.object,
    };
	componentDidMount() {
		const { init } = this.context.store;
		init();
	}
	render() {
		if (!isLogin()) {
			return <Login />
		}
		const { initState } = this.context.store;
		if (initState === 'pending') {
			return (
				<div className="app pending">
					<Spin size="large" /> 正在初始化...
				</div>
			);
		}
		return (
			<div className="app">
				<header className="app-header">
				
				</header>
				<Router>
					<Route path="/" exact component={Home} />
				</Router>
			</div>
		);
	}
}
export default App;
