import React from 'react';
import {Link} from 'react-router-dom';
export default class SignUp extends React.Component {
    render() {
        return (
        <div className="container">
            <h1 className="signup-header">Sorry...</h1>
            <Link to="/login" id="to-login">Back to Login</Link>
        </div>
        )
    }
}