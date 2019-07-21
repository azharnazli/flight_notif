import React from 'react';
import './App.css';

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

import Toolbar  from './components/Toolbar/Toobar'

import Ticket from './containers/ticket/Ticket'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/ticket" component={ Ticket } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
