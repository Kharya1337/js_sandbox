import React from 'react';
import ReactDOM from 'react-dom';
import LodinSuccessful from './login-successful';
import Login from './login';
import SignUp from './signup';
import JSONBin from './jsonbin';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Redirect from="/" exact to="/login" />
            <Route path="/welcome" component={LodinSuccessful} />
            <Route path="/signup" component={SignUp} />
            <Route path="/bin/:id" component={JSONBin} />
        </Switch>
    </Router>
), document.getElementById('root'));


