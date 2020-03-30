import React, { Component } from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

//AFFICHAGE DU BURGER
//MODIFIE EN CLASSE POUR UTILISER LE MODULE PROPTYPES

class Burger extends Component {

    //goal : transform ingredients props.object into an array of burger ingredients components
    render() {
        let transformedIngredients = [];

        for (let key in this.props.ingredients) {
            for (let i = 0; i < this.props.ingredients[key]; i++) {
                transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);
            }
        }

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding some ingredients !</p>
        }

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        )
    }
}


export default Burger;

//Object.keys() = To get objects keys from 'props.ingredients' and return an 'array of strings' 
//on this array I execute a map() = it create an [] with inside many empty array depending ingredient amount 
//on this array i execute map() = I'm only interested by the key (_,i) so, I return 
//<BurgerIngredient /> component with key et type
//---------------------------------------------------------------------------------------------
// const transformedIngredients = Object.keys(props.ingredients)
//     .map((ingredientKey) => {
//         return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
//             return <BurgerIngredient type={ingredientKey} key={ingredientKey + i} />
//         });
//     });


Burger.propTypes = {
    ingredient: PropTypes.array.isRequired
};

//to be sure ingredient is an Array, and this props is required
//the validation propType is somethings that is useful in development mod or for bigger project
