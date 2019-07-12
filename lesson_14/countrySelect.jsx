import React from 'react';
import PropTypes from 'prop-types';

export default class CountrySelect extends React.Component{

    constructor(props) {
        super();

        if(!CountrySelect.Countries) {
            CountrySelect.Countries = fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
            .then(res => res.json());
        } 

        CountrySelect.Countries
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

        this.state = {
            countriesFlags: [{
                country: '',
                flag: ''
            }],
            selected: props.defaultCountry
        }
    }

    onClick(country) {
        this.setState({selected: country});
    }


    render() {   
        let data = this.state.countriesFlags;
        return (
        <div style={{height: this.props.maxHeight,
                    overflowY: 'scroll'}}>
            <ul>
                {data.map((country, index) => 
                    <li
                        onClick = {() => this.onClick(country.country)}
                        style = {{backgroundColor: this.state.selected === country.country ? 'green' : 'transparent'}}
                        key={index}
                    >
                        {country.country} <img src={country.flag} alt="" height='20px'/>
                    </li>
                )}
            </ul>
        </div>
        )
    }
}

CountrySelect.defaultProps = {
    maxHeight: 150,
    defaultCountry: 'Ukraine',
};