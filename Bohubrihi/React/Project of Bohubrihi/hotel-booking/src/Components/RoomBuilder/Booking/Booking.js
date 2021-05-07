import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { reset_booking } from '../../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        services: state.services,
        totalCost: state.totalCost,
        purchasable: state.purchasable,
        userId: state.userId,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reset_booking: () => dispatch(reset_booking())
    }
}

class Booking extends Component {

    state = {
        values: {
            address: "",
            phone: "",
            paymentType: "Cash On Delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: ""
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

        const booking = {
            services: this.props.services,
            totalCost: this.props.totalCost,
            guest: this.state.values,
            bookingTime: new Date(),
            userId: this.props.userId
        }
        axios.post("https://hotel-booking-8aa77-default-rtdb.firebaseio.com/booking.json?auth=" + this.props.token, booking)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Booking Successfull!",
                    })
                    this.props.reset_booking();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Booking Failed!"
                    })
                }
            })
            .catch(err => this.setState({
                isLoading: false,
                isModalOpen: true,
                modalMsg: "Booking Failed in catch!"
            }))
    }

    goBack = () => {
        this.props.history.goBack('/');
    }
    render() {

        let form = (
            <div>
                <h4 style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>Payment: {this.props.totalCost} BDT</h4>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <textarea name="address" onChange={(e) => this.inputChangeHandler(e)} value={this.state.values.address} className="form-control" placeholder="Your Address" ></textarea>
                    <br />
                    <input name="phone" onChange={(e) => this.inputChangeHandler(e)} className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" />
                    <br />
                    <select name="paymentType" onChange={(e) => this.inputChangeHandler(e)} className="form-control" value={this.state.values.paymentType} >
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                    </select>
                    <br />
                    <Button disabled={!this.props.purchasable} className="mr-auto" style={{ backgroundColor: "#D70F64" }} onClick={this.submitHandler} >Booking</Button>
                    <Button className="ml-1" style={{ backgroundColor: "secondary" }} onClick={this.goBack} >Cancel</Button>
                </form>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

