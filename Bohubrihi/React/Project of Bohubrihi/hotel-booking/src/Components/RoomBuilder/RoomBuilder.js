import React, { Component } from 'react';
// import Room from './Room/Room';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
// import RoomDetails from './Room/RoomDetails';
import RoomService from './Room/RoomService';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';
import { addService, removeService, updatePurchasable } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        roomsDetails: state.roomsDetails,
        services: state.services,
        totalCost: state.totalCost,
        purchasable: state.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addService: (type) => dispatch(addService(type)),
        removeService: (type) => dispatch(removeService(type)),
        updatePurchasable: () => dispatch(updatePurchasable())
    }
}

class RoomBuilder extends Component {
    state = {
        roomSelected: null,
        modalOpen: false,
        controlModalOpen: false,

    }

    roomSelect(room) {
        this.setState({
            roomSelected: room,
            modalOpen: true
        })
    }

    toogleModal = () => {
        this.setState({
            modalOpen: false,
            controlModalOpen: !this.state.controlModalOpen
        })
    }

    addServiceHandle = type => {
        this.props.addService(type)
        this.props.updatePurchasable();
    }
    removeServiceHandle = type => {
        this.props.removeService(type);
        this.props.updatePurchasable();
    }

    handleCheckout = () => {
        this.props.history.push("booking");
    }

    render() {
        // let rooms = this.props.roomsDetails.map(room => {
        //     return (
        //         <Room room={room} key={room.id} roomSelect={() => this.roomSelect(room)} />
        //     )
        // });
        // let details = null;
        // if (this.state.roomSelected != null) {
        //     details = <RoomDetails room={this.state.roomSelected} />
        // }
        return (
            <div className="row">
                {/* <div className="col-3">
                    {rooms}
                </div> */}
                <br />
                <div>
                    <div className="d-flex flex-md-row flex-column col-12">  {/* d-flex flex-md-row flex-column */}
                        <RoomService services={this.props.services} />
                        <Controls
                            totalCost={this.props.totalCost}
                            addService={this.addServiceHandle}
                            removeService={this.removeServiceHandle}
                            toogleModal={this.toogleModal}
                            purchasable={this.props.purchasable}
                        />
                    </div>
                    <Modal isOpen={this.state.controlModalOpen}>
                        <ModalHeader>Your Order Summary</ModalHeader>
                        <ModalBody>
                            <h5>Total Price: {this.props.totalCost.toFixed(0)} BDT</h5>
                            <Summary services={this.props.services} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" style={{ backgroundColor: "#D70F64" }}
                                onClick={this.handleCheckout}>Continue to Checkout</Button>
                            <Button color="secondary" onClick={this.toogleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                {/* <Modal isOpen={this.state.modalOpen}>
                    <ModalBody>
                        {details}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toogleModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomBuilder);