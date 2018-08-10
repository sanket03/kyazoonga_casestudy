import React from 'react';

import  site_logo from '../../images/kyazoonga.png';

const NavbarLeftContent = () => {
    return (
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="site-logo" href="#"><img src={site_logo} alt="The Big Ticket" title="The Big Ticket"/></a>
      </div>
    )
}

export default NavbarLeftContent;
