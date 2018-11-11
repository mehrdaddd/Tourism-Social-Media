import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import l from '../logo.png';

class Header extends Component {

    render() {
        return(
                <header className="App-header">
                    <div >
                        <img className="App-logo" src={l} alt="The Pulpit Rock" width="200" height="80" />
                        <Navigation  />
                    </div >
                    <p className="whitt">The more Travel the more ...</p>

                </header>
        );
    }
}
export default Header;