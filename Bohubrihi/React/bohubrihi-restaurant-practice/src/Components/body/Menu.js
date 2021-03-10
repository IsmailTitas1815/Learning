import React, { Component } from 'react';
import Dishes from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';

class Menu extends Component {

    state = {
        dishes: Dishes,
        selectedDish: null,
        toogle: true
    }

    selectedDishDetail = (dish) => {
        this.setState({
            selectedDish: dish
        })
    }

    render() {
        let menu = this.state.dishes.map((dish) => {
            return (
                <MenuItem dish={dish}
                    key={dish.id}
                    selectedDish={() => this.selectedDishDetail(dish)}
                />
            )
        })
        let dishDetails = null;
        if (this.state.selectedDish) {
            dishDetails =  <DishDetails dish={this.state.selectedDish}/>
        }



        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetails}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;