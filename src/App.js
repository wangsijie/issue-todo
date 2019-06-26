import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.less';

function App() {
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

export default App;
