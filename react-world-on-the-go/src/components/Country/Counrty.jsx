import React from 'react';
import "./counrty.css"

const Counrty = ({counrty}) => {

    return (
        <div className='country'>
            <img src={counrty?.flags?.flags?.png} alt={counrty.flags.flags.alt} />
            <h3>Name: {counrty.name.common}</h3>
            <h3>Area: {counrty.area.area} {counrty.area.area > 300000 ? "Big Country" : "Small country"}</h3>
            <h3>Population: {counrty.population.population}</h3>
        </div>
    );
};

export default Counrty;