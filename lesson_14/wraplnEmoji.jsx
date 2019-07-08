import * as React from 'react';
import * as ReactDOM from 'react-dom';
var randomEmoji = require('random-emoji');

// let emoji = randomEmoji.random({count: 2});

export default class WrapInEmoji extends React.Component {
    constructor() {
        super();
        this.state = {
            emoji1: randomEmoji.random({count: 1})[0].character,
            emoji2: randomEmoji.random({count: 1})[0].character,

        };
        this.onEmojiClick1 = this.onEmojiClick1.bind(this);
        this.onEmojiClick2 = this.onEmojiClick2.bind(this);
    }

    onEmojiClick1() {
        this.setState({
            emoji1: randomEmoji.random({count: 1})[0].character
        });
    }
    onEmojiClick2() {
        this.setState({
            emoji2: randomEmoji.random({count: 1})[0].character
        });
    }

    componentWillMount() {
        if(this.props.defaultEmoji) {
            this.setState({
                emoji1: this.props.defaultEmoji,
                emoji2: this.props.defaultEmoji,
            });
        };
    }

    render() { 
        return (
            <div style={{marginBottom: '20px'}}>
                <span onClick={this.onEmojiClick1}>{this.state.emoji1}</span>
                <span>{this.props.children}</span>
                <span onClick={this.onEmojiClick2}>{this.state.emoji2}</span>
            </div>
        )
    }
}
