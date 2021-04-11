import React, { Component } from 'react';
import Body from './body/Body';
import Header from './header/Header';
import Footer from './footer/Footer';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default MainComponent