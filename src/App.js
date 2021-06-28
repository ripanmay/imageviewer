import React, {Component, Fragment} from 'react'
import './App.css';
//Router import for redirection.
import {Route, Switch} from "react-router-dom";
//Imports of different pages in the application
import Login from "./screens/login/Login";

class App extends Component {
  render() {
      return <Fragment>
          <Switch>
              <Route exact path='/' render={(props) => <Login {...props}/>}/>
          </Switch>
      </Fragment>
  }
}

export default App;
