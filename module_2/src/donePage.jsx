import React from 'react';

export default class DonePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>{this.props.message}</div>
    }
}