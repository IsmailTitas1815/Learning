import React from 'react';
import Gallery from './Gallery';
import Home from './Home';
import Contact from './Contact';
import { Route, Switch, Redirect } from 'react-router-dom';
const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
                <Redirect from='/' to="/home" />
            </Switch>
        </div>
    )
}

export default Body;