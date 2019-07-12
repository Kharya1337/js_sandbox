import React from 'react';
import Isemail from 'isemail';

export default class SecondRegistr extends React.Component {
    constructor() {
        super();

        this.state = {
            'bottom-color': 'gray',
            email: '',
            password: '',
            password2: '',
            done: false,
            step: 3
        }

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            username: this.props.username,
            country: this.props.country,
            age: +this.props.age,
        })
    }

    onChangeEmail(target) {
        if(target.value !== '') {
            if(Isemail.validate(target.value)) {
                this.setState({
                    email: target.value
                })
                target.style.borderColor = 'green';
            } else {
                target.style.borderColor = 'red';
            }
        } else {
            target.style.borderColor = 'grey';
        }
    }

    onChangePassword(target) {
        if(target.value != '') {
            this.setState({
                password: target.value
            })
        }
    }

    onChangePassword2(target) {
        if(target.value !== '') {
            if(target.value === this.state.password) {
                this.setState({
                    done: true
                });
                target.style.borderColor = 'green';
            } else {
                target.style.borderColor = 'red';
            }
        } else {
            target.style.borderColor = 'grey';
        }
    }

    onClick() {
        if(this.state.done) {
            this.props.updatePage(3);
            fetch('https://authserver.worldthirteen.now.sh/register', {
                method: 'POST',
                body: JSON.stringify(this.state)
            })
                .then(res => res.json())
                .then((res) => {   
                    this.props.updateMessage(res.status ? 'Welcome' : 'Fail: ' + res.error);
                })
                .then(() => {
                    this.props.updatePage(4)
                });
        } else {
            console.log('Error');    
        }
    }

    render() {
        return (
            <div id="inputs">
                <div id="email">
                    EMAIL
                    <input type="email" onChange={(event) => this.onChangeEmail(event.target)}/>
                    <div className="bottom-color" style={{backgroundColor: this.state['bottom-color']}}></div>
                </div>
                <div id="password">
                    PASSWORD
                    <input type="password" onChange={(event) => this.onChangePassword(event.target)}/>
                    <div className="bottom-color" style={{backgroundColor: this.state['bottom-color']}}></div>
                </div>
                <div id="country">
                    TYPE PASSWORD AGAIN 
                    <input type="password" onChange={(event) => this.onChangePassword2(event.target)}/>
                    <div className="bottom-color" style={{backgroundColor: this.state['bottom-color']}}></div>
                </div>
                <button id="sign-up" onClick = {this.onClick}>SIGN UP</button>
            </div>
        );
    }
}