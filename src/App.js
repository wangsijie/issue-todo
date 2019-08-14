import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { isLogin } from './helpers/remote';
import Header from './components/header';
import Sidebar from './components/sidebar';
import RightBar from './components/right-bar';
import Login from './pages/login';
import Inbox from './pages/inbox';
import NextAction from './pages/next-action';
import List from './pages/list';
import Important from './pages/important';
import './app.less';

@observer
class App extends React.Component {
	static contextTypes = {
        store: PropTypes.object,
    };
	componentDidMount() {
		const { init } = this.context.store;
		if (isLogin()) {
			init();
		}
	}
	render() {
		if (!isLogin()) {
			return <Login />
		}
		const { initState } = this.context.store;
		if (initState === 'pending') {
			return (
				<div className="app pending">
					<Spin size="large" /> Initializing...
				</div>
			);
		}
		return (
			<div className="app">
				<Router>
					<Header />
					<div className="app-body">
						<Sidebar />
						<div className="app-main">
							<Route path="/" exact component={Inbox} />
							<Route path="/next-action" component={NextAction} />
							<Route path="/important" component={Important} />
							<Route path="/list" component={List} />
						</div>
						<RightBar />
					</div>
				</Router>
			</div>
		);
	}
}
export default App;
