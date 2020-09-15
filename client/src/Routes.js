import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './app.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Profile from './components/Profile';
import Rooms from './components/Rooms';
import Room from './components/Room';



class Routes extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
};
 
export default Routes;