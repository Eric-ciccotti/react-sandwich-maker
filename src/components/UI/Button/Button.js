import React from 'react';
import classes from './Button.module.css';

//le join(' ') convertit l'array en string
//classeName={'classes.Button classes.UneProps'}

const button = props => (
    <button 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.click}>{props.children}</button>
);
export default button;

