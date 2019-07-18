import React from 'react';
import {Link} from 'react-router-dom';

export default class JSONBin extends React.Component {
    constructor() {
        super(); 

        this.state = {
            message: '',
            data: []
        }
    }
    componentDidMount() {
        if(!JSONBin.Bin) {
            JSONBin.Bin = fetch(`https://api.jsonbin.io/b/${this.props.match.params.id}/latest`, {method: 'GET'})
        } 

        JSONBin.Bin
            .then(res => res.json())
            .then(res => {   
                if(res.message) {
                    this.setState({
                        message: res.message || '',
                    })
                } else {
                    let arr = [];
                    for (const key in res) {
                        if (res.hasOwnProperty(key)) {
                            arr.push(key + ": " + res[key]);
                        }
                    }       
                    this.setState({
                        data: arr
                    })
                }
                // console.log(res);
            }); 
    }
    render() {
        return (
            <div className="bin-container">
                <h1 className="bin-header">JSONBin</h1>
                <Link to="/" id="to-main">Back to Main page</Link>
                <div id="error">{this.state.message}</div>
                <ul>
                    {this.state.data.map((item, key) => <li key={key}>{item}</li>)}
                </ul>
            </div>
        )
    }
}