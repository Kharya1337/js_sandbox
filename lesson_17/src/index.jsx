import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './main-page';
import LodinSuccessful from './login-successful';
import Login from './login';
import SignUp from './signup';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Redirect from="/" exact to="/login" />
            <Route path="/welcome" component={LodinSuccessful} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </Router>
), document.getElementById('root'));