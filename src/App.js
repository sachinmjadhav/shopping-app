import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Products from './components/Products';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
