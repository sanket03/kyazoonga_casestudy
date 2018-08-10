import React, { Component } from 'react';

import NavbarLeftContent from './NavbarLeftContent';
import NavbarRightContent from './NavbarRightContent';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse site-nav">
                <NavbarLeftContent />
                <NavbarRightContent view = {this.props.view}/>
            </nav>
        );
    }
}

export default Header;
