import React from 'react';

export default class Loader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <img src="https://i.pinimg.com/originals/76/77/ed/7677edd5a44b10130b8824ca020ba60b.gif" width='200px'/>
                <div>We are signing you up</div>
            </div>
        )
    }
}