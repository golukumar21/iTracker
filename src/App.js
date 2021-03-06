import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createProject from '../src/createProject/createProject';
import Header from '../src/header/Header';
import Dashboard from '../src/dashboard/Dashboard';
import createProjectDet from '../src/createProjectDetails/createProjectDet';
import projectDetails from '../src/projectDetails/projectDetails';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch location={this.props.location}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create" component={createProject} />
          <Route exact path="/create_project" component={createProjectDet} />
          <Route exact path="/project_details/:id" component={projectDetails} />
        </Switch>
      </Router>
    )
  }
}

export default App;
