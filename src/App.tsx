import './App.css';

import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import CounterPage from '$Pages/counter';
import TodoPage from '$Pages/todo';

function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/counter">Counter</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/">
					<TodoPage />
				</Route>
				<Route path="/counter">
					<CounterPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
