import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="app_name">
                        <Link to="/create">
                            <h1>iTracker</h1>
                        </Link>
                        <div className="app_opt">
                            <ul>
                                <li>
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/create_project">Create Project</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={require('../assets/USTLogo.png')} alt="logo" />
                </header>
            </div>
        )
    }
}

export default Header;