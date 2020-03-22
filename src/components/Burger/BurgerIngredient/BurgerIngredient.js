import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';
//INGREDIENTS A AFFICHER EN FONCTION DU CHOIX

//Here we have made 'classed based' whereas it should be a 'functional component' 
//this is because of the 'PropType' module which only work for class based components 

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = (
                    <div className={classes.Meat}></div>
                );
                break;
            case ('cheese'):
                ingredient = (
                    <div className={classes.Cheese}></div>
                );
                break;
            case ('salad'):
                ingredient = (
                    <div className={classes.Salad}></div>
                );
                break;
            case ('bacon'):
                ingredient = (
                    <div className={classes.Bacon}></div>
                );
                break;
            default: ingredient = null;
        }

        return ingredient;

    }


}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;

