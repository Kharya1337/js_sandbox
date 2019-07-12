import React from 'react';

export default class FirstRegistr extends React.Component {
    constructor() {
        super();

        this.state = {
            'bottom-color': 'gray',
            name: '',
            username: '',
            country: '',
            age: 0,
            step: 2
        }

        this.onClick = this.onClick.bind(this);
    }

    onChangeName(target) {
        if(target.value != '') {
            this.setState({
                name: target.value
            })
        }
    }

    onChangeUsername(target) {
        if(target.value != '') {
            this.setState({
                username: target.value
            })
        }
    }

    onChangeCountry(target) {
        if(target.value != '') {
            this.setState({
                country: target.value
            })
        }
    }

    onChangeAge(target) {
        if(target.value != '') {
            this.setState({
                age: target.value
            })
        }
    }

    onClick() {
        fetch(`https://authserver.worldthirteen.now.sh/check_username?username=${this.state.username}`, {
            method: 'GET'
        }).then(res => res.json())
          .then(res => {
            if(res.status === 'OK') {
                this.props.updatePage(this.state.step, 
                                      this.state.name, 
                                      this.state.username, 
                                      this.state.country, 
                                      this.state.age);     
            } else {
                this.setState({
                    'bottom-color': 'red'
                })
            }
          });
    }

    render() {
        return (
            <div id="inputs">
                <div id="name">
                    NAME
                    <input type="text" onChange={(event) => this.onChangeName(event.target) }/>
                </div>
                <div id="username">
                    USERNAME
                    <input type="text" onChange={(event) => this.onChangeUsername(event.target)} 
                                        style={{borderColor: this.state['bottom-color']}}/>
                </div>
                <div id="country">
                    COUNTRY
                    <input type="text" onChange={(event) => this.onChangeCountry(event.target)}/>
                </div>
                <div id="age">
                    AGE
                    <input type="number" onChange={(event) => this.onChangeAge(event.target)}/>
                </div>
                <button id="next-step" onClick = {this.onClick}>NEXT STEP</button>
            </div>
        )
    }
}