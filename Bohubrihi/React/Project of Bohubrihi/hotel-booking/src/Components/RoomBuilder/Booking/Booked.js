import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBooking } from '../../../redux/actionCreators';
import BookedRoom from './BookedRoom';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = state => {
    return {
        bookedRoom: state.bookedRoom,
        bookedRoomLoading: state.bookedRoomLoading,
        bookedRoomErr: state.bookedRoomErr,
        token: state.token,
        userId: state.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchBooking: (token, userId) => dispatch(fetchBooking(token, userId))
    }
}

class Booked extends Component {
    componentDidMount() {
        this.props.fetchBooking(this.props.token, this.props.userId);
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        let rooms = [];
        if (this.props.bookedRoomErr) {
            rooms = <p style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
                marginBottom: "10px"
            }}>Sorry Failed to Load Booked Room Information</p>
        }
        else {
            if (this.props.bookedRoom.length === 0) {
                rooms = <p style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginBottom: "10px"
                }}>You have not booked any room!</p>
            }
            else {
                rooms = this.props.bookedRoom.map(room => {
                    return <BookedRoom room={room} key={room.id} />
                });
            }
        }
        return (
            <div>
                {this.props.bookedRoomLoading ? <Spinner /> : rooms}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booked);