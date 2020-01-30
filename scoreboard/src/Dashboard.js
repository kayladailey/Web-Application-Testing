import React from 'react';

export function strike () {
    console.log('strike');
}

export function ball () {
    console.log('ball');
}


export function foul () {
    console.log('foul');
}


export function hit (state = 0) {
   return(
        state = state++
   )
}


const Dashboard = () => {
    return (
        <div className = 'buttons'>
        <button onClick={strike}>Strike</button>
        <button onClick={ball}>Ball</button>
        <button onClick={foul}>Foul</button>
        <button onClick={hit}>Hit</button>
        </div>
    )
}

export default Dashboard;