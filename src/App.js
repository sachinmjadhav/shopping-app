import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Nav from './components/Nav';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
