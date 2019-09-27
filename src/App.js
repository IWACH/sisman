import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from './Login';
import './App.scss';
import { Dashboard } from './Dashboard';

function App() {
  const onClick = () => {
    window.ipcRenderer.send('open-excel');
  }
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
  );
}

export default App;
