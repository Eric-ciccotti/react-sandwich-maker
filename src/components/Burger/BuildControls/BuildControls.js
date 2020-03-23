import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
//AFFICHAGE DES BOUTONS EN RELATION AVEC LE TYPE D'INGREDIENT

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <div>Current price:<strong>{props.price.toFixed(2)}</strong></div>
        {controls.map((control) => (
            <BuildControl 
                added={() => props.ingredientAdded(control.type)} 
                removed={() => props.ingredientRemoved(control.type)}
                key={control.label} 
                label={control.label}
                disabled={props.disabled[control.type]}/> //ex: disabled['cheese'] = true or false ?
        ))}
    </div>
);

export default buildControls;