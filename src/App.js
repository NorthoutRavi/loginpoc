import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/userRegistration";
import Dashoard from "./components/pages/dashoard";
import Protected from "./components/common/router/Protected";
import Public from "./components/common/router/Public";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Public path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Protected path="/" exact component={Dashoard}/>
        </Switch>
      </Router>
  </div>);
}

export default App;
