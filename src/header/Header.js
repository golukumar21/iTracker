import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>iTracker</h1>
                    <img src={require('../assets/USTLogo.png')} alt="logo" />
                </header>
            </div>
        )
    }
}

export default Header;