import React from 'react';
import './Ingredient.css'
import BreadTop from '../../../assets/images/BreadTop.jpg'
import BreadBottom from '../../../assets/images/BreadBottom.png'
import Meat from '../../../assets/images/Meat.jpg'
import cheese from '../../../assets/images/cheese.jpg'
import salad from '../../../assets/images/salad.jpg'

const Ingredient = props => {

    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt="BreadBottom" /></div>
            break;
        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt="BreadTop" /></div>
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={cheese} alt="cheese" /></div>
            break;
        case 'salad':
            ingredient = <div><img src={salad} alt="salad" /></div>
            break;
        default:
            ingredient = null;
    }
    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;