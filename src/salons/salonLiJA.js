import React from 'react';

const CreationLiPartSalons = ({date, classNameOfObject,nameOfExposition, location}) => {
    return (
        <li className={classNameOfObject}>{date} 
        <span >{nameOfExposition}</span> <br/>  {location} <br/> </li>
    )
}

export default CreationLiPartSalons