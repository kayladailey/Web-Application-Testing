import React from 'react';
import {hit, strike, foul, ball} from './Dashboard';


const Display = () => {
    return (
        <div>
            <h1> Testing is a Sport!</h1>
    <h2>Balls: {ball}</h2>
<h2>Hits: {hit}</h2>
<h2>Strikes: {strike}</h2>
<h2>Fouls: { foul}</h2>
        </div>
    )
}

export default Display;