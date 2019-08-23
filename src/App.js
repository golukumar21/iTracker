import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createProject from '../src/createProject/createProject';
import Header from '../src/header/Header';
import createProjectDet from '../src/createProjectDetails/createProjectDet';
import projectDetails from '../src/projectDetails/projectDetails';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={createProject} />
          <Route exact path="/create_project" component={createProjectDet} />
          <Route exact path="/project_details" component={projectDetails} />
        </Switch>
      </Router>
    )
  }
}

export default App;
