import React from 'react';


class LoadCountries extends React.Component {
    render() {
        return (
            <li>{this.props.country} <img src={this.props.flag} alt="" height='20px'/></li>
        )
    }
}

export default class CountrySelect extends React.Component{
    constructor() {
        super();
        this.state = {
            countriesFlags: [{
                country: '',
                flag: ''
            }],
        }
        this.maxHeight = this.maxHeight.bind(this);
    }

    componentDidMount() {
        return fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
            .then(res => res.json())
            .then(res => {
                let arr = [];   
                for (const key of res) {
                        arr.push({country: key['name'],
                                  flag: key['flag']}); 
                }   
                this.setState({
                    countriesFlags: arr
                });
                
            });
    }

    maxHeight(){   
        if(!this.props.maxHeight){
            return '100%';
        }
        return `${this.props.maxHeight}px`
    }

    render() {   
        let data = this.state.countriesFlags;
        return (
        <div style={{height: this.maxHeight(),
                    overflowY: 'scroll'}}>
            <ul>
                {data.map((country, index) => 
                    <LoadCountries
                        country={country.country} 
                        flag={country.flag}
                        key={index}
                    />
                )}
            </ul>
        </div>
        )
    }
}