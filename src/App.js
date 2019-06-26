import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isLogin } from './helpers/remote';
import Home from './pages/home';
import Login from './pages/login';
import './App.less';

function App() {
	if (!isLogin()) {
		return <Login />
	}
    return (
		<div className="app">
			<header className="app-header">
			
			</header>
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
			</Router>
		</div>
    );
}

export default App;
