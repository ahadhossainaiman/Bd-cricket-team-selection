import React from 'react';

const AddPlayerDetails = (props) => {
    const {name,salary,img} = props.playerData;
    return (
        <div>
            <img src={img} alt=""/>
            <h2>Player Name: {name}</h2>
            <h3>Salary:$ {salary}</h3>
        </div>
    );
};
export default AddPlayerDetails;