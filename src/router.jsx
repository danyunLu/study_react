import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import { HomeComponent } from './modules/home/home'

export class RouterComponent extends React.Component {
  render() {
    return <Router>
      <Switch>
        <Route path='/home' component={HomeComponent} />
        <Route path='/' component={HomeComponent} />
      </Switch>
    </Router>
  }
}
export default RouterComponent
