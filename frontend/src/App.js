import React from 'react';
import './App.css';
import Header from './containers/header'
import Login from './containers/login'
import Home from './containers/home'
import PrivateRoute from './containers/privateRouter'
import Register from './containers/register'
import NewOrder from './containers/newOrder'
import Detail from './containers/detail'
import Profile from './containers/profile'
import Update from './containers/update'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import { loadUser } from "./actions/auth";

class App extends React.Component {


    componentDidMount(){
        this.props.loadUser();
    }

    render(){
        return (
          <div>
              <Header />
              <div>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path='/login' component={Login} />
                      <Route path='/register' component={Register} />
                      <PrivateRoute path='/new' component={NewOrder} />
                      <Route path="/detail:id" component={Detail} />
                      <Route path='/update/:id' component={Update} />
                      <PrivateRoute path='/profile' component={Profile} />
                  </Switch>
              </div>
          </div>
        );
    }
}

export default connect(null, {loadUser})(App);
