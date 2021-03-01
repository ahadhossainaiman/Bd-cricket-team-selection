import React from 'react';
import AddPlayerDetails from '../addPlayerDelails/AddPlayerDetails';
import './addPlayer.css'


const AddPlayer = (props) => {
    const {name,salary,img}= props.addedPlayer;
    const addedPlayer = props.addedPlayer;
    console.log(addedPlayer);
    let totalSalary = 0;
    for (let i = 0; i < props.addedPlayer.length; i++) {
        const player = props.addedPlayer[i];
        totalSalary = totalSalary + player.salary;  
    }
   
    return (
        <div className='addPlayer-container'>
            {
             props.addedPlayer.map(playerData=><AddPlayerDetails playerData={playerData}></AddPlayerDetails>)
            }
            <div>
            <h2 className='totalSalaryDesign'>Total-Salary:$ {totalSalary}</h2>  
            </div>  
        </div> 
    );
};

export default AddPlayer;