import React from 'react';
import './player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const Player = (props) => {
    // console.log(props)
    const {name,team,salary,img} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className='container'>
                    <img src={img} alt=""/>
                    <h3>Name: {name}</h3>
                    <h4>Team: {team}</h4>
                    <h3>Salary:$ {salary}</h3>
                    <button className='btn-add' onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus}/> Add Player</button>
        </div>
    );
};
export default Player;