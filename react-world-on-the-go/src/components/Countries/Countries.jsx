import React, { use } from 'react';
import Counrty from '../Country/Counrty';
import "./countries.css"

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div className='countries'>
            <h1>In the countries</h1>
            {
                countries.map(counrty => <Counrty key={counrty.cca3.cca3} counrty={counrty}></Counrty>)
            }
        </div>
    );
};

export default Countries;