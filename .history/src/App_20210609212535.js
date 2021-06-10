import React from 'react';

// files
import './assets/css/app.scss';

// pages
import Dashboard from './pages/Dashboard';
import ExamResults from './pages/ExamResults';
import Speakings from './pages/Speakings';

// npm modules
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/speaking" exact component={Speakings} />
        <Route path="/examresults" exact component={ExamResults} />
      </Switch>
    </Router>
  );
}

export default App;
