import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createProject from '../src/createProject/createProject';
import Header from '../src/header/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={createProject} />
        </Switch>
      </Router>
    )
  }
}

export default App;
