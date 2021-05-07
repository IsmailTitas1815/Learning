import React from 'react';
import './Header.css';
import logo from '../../assets/Logo.png';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Header = (props) => {
    let links = null;
    if (props.token === null) {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/login" className="NavLink" href="#">Login</NavLink>
                </NavItem>
            </Nav>
        )
    }
    else {
        links =
            (
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink" href="#">Hotel</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/booked" className="NavLink" href="#">Booked Room</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/logout" className="NavLink" href="#">Logout</NavLink>
                    </NavItem>
                </Nav>
            )
    }
    return (
        <div className="Navigation">
            <Navbar style={{
                background: "grey",
                height: "70px",
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand" >
                    <img src={logo} alt="logo" width="77px" style={{ background: "black" }} />
                </NavbarBrand>
                {links}
            </Navbar>
        </div>
    )


}

export default connect(mapStateToProps, null)(Header);