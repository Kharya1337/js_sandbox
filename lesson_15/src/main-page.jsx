import React from 'react';
import LodinSuccessful from './login-successful';
import Login from './login';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    ChangePage(showValue){
        this.setState({
            show: !showValue
        });
    }

    render() {
        
        return (
            this.state.show ? <Login ChangePage={this.ChangePage.bind(this)}/> : <LodinSuccessful/>
        )
    }
}