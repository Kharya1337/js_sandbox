import React from 'react';
import ReactDOM from 'react-dom';
import WrapInEmoji from './wraplnEmoji';
import Timer from './timer';
import CountrySelect from './countrySelect';


ReactDOM.render((
    <div>
        <WrapInEmoji defaultEmoji='🎃'>Some text</WrapInEmoji>
        <Timer></Timer>
        <CountrySelect ></CountrySelect>
    </div>
), document.getElementById('root'))