import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetails';
import MenuItem from './MenuItem'

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        toogle: true
    }

    onDishSelect = (dish) => {
        this.setState(
            {
                selectedDish: dish
            }
        )
    }

    toogleDish = () => {
        this.setState(
            {
                toogle: !this.state.toogle
            }
        )
    }

    render() {

        let menu = null
        if (this.state.toogle) {
            menu = this.state.dishes.map((item) => {
                return (
                    <MenuItem dish={item}
                        key={item.id}
                        DishSelect={
                            () => this.onDishSelect(item)}
                    />
                )
            })

        }

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <button style={{ textAlign: 'center', margin: '10px' }} onClick={this.toogleDish} >Toogle Button</button>
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu;