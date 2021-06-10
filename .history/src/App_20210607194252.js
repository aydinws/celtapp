import React from 'react';

// files
import './assets/css/app.scss';

// pages
import Dashboard from './pages/Dashboard';

// npm modules
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
