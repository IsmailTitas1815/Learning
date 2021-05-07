import React, { Component } from 'react';
import Header from './Header/Header';
import RoomBuilder from './RoomBuilder/RoomBuilder';
import Booking from './RoomBuilder/Booking/Booking';
// import Room from './RoomBuilder/Room/Room';
import Booked from './RoomBuilder/Booking/Booked';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout';
import { authCheck } from '../redux/authActionCreators';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

class Main extends Component {

    componentDidMount() {
        this.props.authCheck();
    }

    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        }
        else {
            routes = (
                <Switch>
                    <Route path="/booking" component={Booking} />
                    <Route path="/booked" component={Booked} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={RoomBuilder} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    {routes}
                </div>
            </div>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Main);