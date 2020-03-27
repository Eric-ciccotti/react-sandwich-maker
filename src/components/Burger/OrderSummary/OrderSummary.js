import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
        const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => (
            <li key={ingKey}>
            <span style={{ textTransform: 'capitalize' }}>
                {ingKey} </span> : {props.ingredients[ingKey]}
        </li>
        ))

        //first solution but you have to create an empty array
        // const ing = [];
        // for (let [key, value] of Object.entries(props.ingredients)) {
        //     ing.push(
        //     <li key={key}>
        //         <span style={{ textTransform: 'capitalize' }}>
        //             {key} </span> : {value}
        //     </li>
        //     );
        // }

        console.log(ingredientSummary);

    return (
        <Aux>
            <h3>Your order</h3>
            <p>Delicious burger ! With the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to CheckOut ?</p>
        </Aux>
    );
};

export default orderSummary;