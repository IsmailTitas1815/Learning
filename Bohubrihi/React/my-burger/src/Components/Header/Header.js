import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.css';
import Logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                background: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">Burger Builder</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/login" className="NavLink">Login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;