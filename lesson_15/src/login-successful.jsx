import React from 'react';
import Ellipse from './Ellipse.png';
export default class LodinSuccessful extends React.Component {
    render() {
        return (
        <div className="container">
            <h1 className="successful-header">YOUR ART MUSEUM</h1>
            <div id="react-logo"><img src={Ellipse} alt="Ellipse" /></div>
            <span id="welcome">Welcome back, <b>React</b></span>
            <a id="go-to-app">Go to app</a>
        </div>
        )
    }
}