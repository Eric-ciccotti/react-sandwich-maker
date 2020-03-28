import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//LE BURGER BUILDER : AFFICHAGE DU BURGER + BOUTONS DE CONTROLS + STATES + METHODES

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 2.5,
    bacon: 0.7
};


class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
    }

    purchaseableStateHandler = (ingredients) => {
        const valuesArray = Object.values(ingredients);
        const sum = valuesArray.reduce((a, b) => a + b);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1; //nombre mis à jour
        const updatedIngredients = { //ingrédients mis à jour
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdditions = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditions;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.purchaseableStateHandler(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) { 
            return 
        };
        const updatedCount = oldCount - 1; //nombre mis à jour
        const updatedIngredients = { //ingrédients mis à jour
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.purchaseableStateHandler(updatedIngredients);
    }

    purchasingHandler = () => {
        //purschasing = 'achat'
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purschaseContinueHandler = () => {
        alert('Continue the order ;)');
    }

    render() {
        /* DISABLE BUTTON HANDLER */
        const disabledInfo = {
            ...this.state.ingredients
        };
        // const disabledInfo = { salad: number ... }
   

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // ex: 'valeur' de disabledInfo['salad'] <= 0 ? renvoie true ou false
        // {salad: true, meat: false ...}

    
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice.toFixed(2)}
                        ingredients={this.state.ingredients} 
                        cancel={this.purchaseCancelHandler}
                        continue={this.purschaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchasingHandler}
                    disabled={disabledInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;