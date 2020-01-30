import React from 'react';

export const addBall = balls => balls >= 3 ? 0 : balls + 1;
export const addStrike = strikes =>  strikes >= 2 ? 0 : strikes + 1;


function Dashboard({ 
    balls, 
    strikes, 
    setBalls, 
    setStrikes, 

  }) {

  return (
    <div>
      <button
        onClick={()=> setBalls(addBall(balls))} 
        data-testid="ballbtn"
      >Ball
      </button>
      <button
        onClick={()=> setStrikes(addStrike(strikes))}
        data-testid="strikebtn"
      >Strike</button>
    </div>
  )
}

export default Dashboard;