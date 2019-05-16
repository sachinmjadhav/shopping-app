import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Nav from './components/Nav';

const Admin = React.lazy(import('./pages/Admin'));

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Route exact path="/admin" component={Admin} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
