import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
    const { products } = useSelector(state => state.CartReducer);
    const { token } = useSelector(state => state.AuthReducer);
    // let nav = null;

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to='/'>
                            <img src="/images/logo.webp" alt="logo" />
                        </Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                                <BsFillBagFill className="cart-icon" />
                                <span>{products.length}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav__auth">
                        <Link to='/orders' className="navlink" > Orders </Link>
                    </div>
                    <div className="nav__auth">
                        <Link to='/logout' className="navlink" > Logout </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
