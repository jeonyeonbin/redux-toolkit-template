import React from "react";
import "./App.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import TodoPage from "$Pages/todo";
import CounterPage from "$Pages/counter";

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
