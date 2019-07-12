import React from 'react';
import FirstRegistr from './firstRegistr';
import SecondRegistr from './secondRegistr';
import FirstPage from './firstPage';
import Loader from './loader';
import DonePage from './donePage';

export default class Registr extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 0,
            name: '',
            username: '',
            country: '',
            age: 0,
            email: '',
            message: ''

        }
    }

    updatePage(step, name, username, country, age) { 
        this.setState({
            step: step,
            name: name,
            username: username,
            country: country,
            age: +age,
        });
    }

    updateMessage(message) {
        this.setState({
            message: message
        })
    } 

    render() {
        if(this.state.step === 0) {
            return <FirstPage updatePage={this.updatePage.bind(this)}></FirstPage>
        } else if(this.state.step === 1) {
            return <FirstRegistr updatePage={this.updatePage.bind(this)}></FirstRegistr>
        } else if(this.state.step === 2) {
            return <SecondRegistr updatePage={this.updatePage.bind(this)}
                                  updateMessage={this.updateMessage.bind(this)}
                                  name={this.state.name} 
                                  username={this.state.username} 
                                  country={this.state.country}
                                  age={this.state.age}></SecondRegistr>
        } else if(this.state.step === 3) {
            return <Loader></Loader>
        } else {
            return <DonePage message={this.state.message}></DonePage>
        }
    }
}