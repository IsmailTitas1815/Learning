import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import { resetIngredients } from '../../../redux/actionCreators';

import axios from 'axios';


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
        userId: state.userId,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients())
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: ""
    }
    goBack = () => {
        this.props.history.push('/')
    }

    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = () => {
        this.setState({
            isLoading: true
        })
        const ingredients = [...this.props.ingredients]
        const ingredientObj = {}
        for (let i of ingredients) {
            ingredientObj[i.type] = i.amount
        }
        const order = {
            ingredients: ingredientObj,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
            user: this.props.userId
        }
        console.log(order);
        const header = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.token}`
            }
        }

        axios.post("http://localhost:8000/api/order/", order, header)
            .then(response => {
                if (response.status === 201) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Order Placed Successfully!",
                    })
                    this.props.resetIngredients();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Something Went Wrong!Order Again!",
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Something Went Wrong!Order Again!",
                })
            })
    }

    render() {

        let form = (<div>
            <h4 style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px"
            }}>Payment: {this.props.totalPrice} BDT
            </h4>
            <form style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px"
            }}>
                <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Address" onChange={(e) => this.inputChangeHandler(e)}></textarea>
                <br />
                <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(e) => this.inputChangeHandler(e)} />
                <br />
                <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                    <option value="Bkash">Bkash</option>
                    <option value="Nagad">Nagad</option>
                </select>
                <br />
                <Button disabled={!this.props.purchasable} className="mr-auto" style={{ backgroundColor: "#D70F64" }} onClick={this.submitHandler}>Place Order</Button>
                <Button className="ml-1" style={{ backgroundColor: "secondary" }} onClick={this.goBack} >Cancel</Button>
            </form>
        </div>)

        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);