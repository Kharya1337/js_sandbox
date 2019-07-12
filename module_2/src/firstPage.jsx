import React from 'react';

export default class FirstPage extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1
        }
    }

    onClick() {
        this.props.updatePage(this.state.step)
    }

    render() {
        return (
            <div>
                <h2>
                    Read Books
                </h2>
                <div>Create your account to get started. After that, you can share books and make friends.</div>
                <button onClick = {() => this.onClick()}>Go to registr</button>
            </div>
            
        )
    }
}