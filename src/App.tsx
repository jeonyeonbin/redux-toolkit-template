import './App.css';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const TodoPage = lazy(() => import('$Pages/todo'));
const CounterPage = lazy(() => import('$Pages/counter'));

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
			<Suspense fallback={<div>loading...</div>}>
				<Switch>
					<Route exact path="/">
						<TodoPage />
					</Route>
					<Route path="/counter">
						<CounterPage />
					</Route>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
