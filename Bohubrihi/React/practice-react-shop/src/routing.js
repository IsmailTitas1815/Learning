import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Cart from './Components/Cart';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import Logout from './Components/Auth_Checkout/Logout';
import Login from './Components/Auth_Checkout/Login';
import Checkout from './Components/Auth_Checkout/Checkout';


const Routing = () => {
    const { token } = useSelector(state => state.AuthReducer);
    
        let routes = (
            <Switch>
                <Route path="/cart" exact component={Cart} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/productdetails/:id" exact component={ProductDetails} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        )
    return (
        <div>
            {routes}
        </div>
    )

}



export default Routing;