import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
        }
        this.onStartClick = this.onStartClick.bind(this);
        this.onPauseClick = this.onPauseClick.bind(this);
        this.onStopClick = this.onStopClick.bind(this);
        this.timer = this.timer.bind(this);

    }

    getButtons() {
        let startButton = document.getElementById('start');
        let pauseButton = document.getElementById('pause');
        let stopButton = document.getElementById('stop');
        let arrButtons = [startButton, pauseButton, stopButton];
        return arrButtons;
    }

    onStartClick() {
        let buttons = this.getButtons();
        buttons[0].setAttribute('disabled', true);
        buttons[1].removeAttribute('disabled');
        buttons[2].removeAttribute('disabled');
        let interval = setInterval(this.timer, 1000);
        this.setState({interval: interval});
    }

    pauseStop() {
        let buttons = this.getButtons();
        buttons[0].removeAttribute('disabled');
        buttons[1].setAttribute('disabled', true);
        buttons[2].setAttribute('disabled', true);
        clearInterval(this.state.interval);
    }

    componentDidMount() {
        this.pauseStop();
    }

    onPauseClick() {
        this.pauseStop();
    }

    onStopClick() {
        this.pauseStop();
        this.setState({
            seconds: 0,
            minutes: 0
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    timer() {
        if(this.state.seconds <= 58) {
            this.setState({
                seconds: this.state.seconds+1
            });
        } else {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes+1
            });
        }
    }


    render() {
        let seconds = this.state.seconds <= 9 ? `0${this.state.seconds}` : this.state.seconds;
        let minutes = this.state.minutes <= 9 ? `0${this.state.minutes}` : this.state.minutes;
        return (
            <div style={{marginBottom: '20px'}}>
                <button id='start' onClick={this.onStartClick}>Start</button>
                <button id='stop' onClick={this.onStopClick}>Stop</button>
                <button id='pause' onClick={this.onPauseClick}>Pause</button>
                <span id='timer'>{minutes}:{seconds}</span>
            </div>
        )
    }
}