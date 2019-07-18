import React from 'react';
import Isemail from 'isemail';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            active: true,
            message: ''
        }
    }

    OnChangeEmail(target) {
        if(target.value != '') {
            this.setState({
                email: target.value,
                active: false
            });
        }else {
            this.setState({
                message: '',
                active: true
            });
        }
    }
    OnChangePassword(target) {
        this.setState({
            password: target.value,
        });
    }

    DoLogin() {
        if(Isemail.validate(this.state.email)) {
            if(this.state.email === 'react@snowball.alevel.com' && this.state.password === 'YouSimplyTheBest2019') {
                this.props.history.push('/welcome');
            } else {
                this.setState({
                    message: 'Invalid email or password'
                });
            }
            
        } else {
            this.setState({
                message: 'Invalid email address'
            });
        }
    } 

    componentDidMount() {
        window.addEventListener('keypress', (event) => {
            if(event.key === 'Enter') {
                this.DoLogin();
            }
        });
    }

    render() {
        return (
        <div className="container">
            <h1 className="login-header">YOUR ART MUSEUM</h1>
            <address>151 3rd St <br/> San Francisco, CA 94103</address>
            <span className="error-message">{this.state.message}</span>
            <input onChange={ (event) => this.OnChangeEmail(event.target)} type="email" className="login-field" id="email" placeholder="Your email"/>
            <input onChange={ (event) => this.OnChangePassword(event.target)} type="password" className="login-field" id="password" placeholder="Password"/>
            <a href="#" id="forgot">Forgot your password?</a>
            <button onClick={ () => this.DoLogin() } id="login-button" disabled={this.state.active}>Log In</button>
            <Link to="/signup" id="havent-acc">Don’t have an account?</Link>
        </div>
        )
    }
}