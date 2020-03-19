import React from 'react'

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //goal : transform ingredients props.object into an array of burger ingredients components
    //---------------------------------------------------------------------------------------------
    //Object.keys() = To get objects keys from 'props.ingredients' and return an 'array of strings' 
    //on this array I execute a map() = it create an [] with inside many empty array depending ingredient amount 
    //on this array i execute map() = I'm only interested by the key (_,i) so, I return 
    //<BurgerIngredient /> component with key et type
    
    const transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
        return[...Array(props.ingredients[ingredientKey])].map((_,i) => {
            return <BurgerIngredient type={ingredientKey} key={ingredientKey + i} />
        });
    });
    

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}


export default burger;
