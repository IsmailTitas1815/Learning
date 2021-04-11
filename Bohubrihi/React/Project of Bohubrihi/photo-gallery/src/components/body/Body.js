import React from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import { Route, Switch, Redirect } from 'react-router-dom';
const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
                <Redirect from='/' to="/home" />
            </Switch>
        </div>
    )
}

export default Body;