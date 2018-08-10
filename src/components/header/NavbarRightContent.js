import React from 'react';

import appConfig from '../../utilities/config';

const NavbarRightContent = (props) => {
    let hideView = props.view == 'desktop' ? 'mobile' : 'desktop';

    // Render event list on mobile view
    const renderEventTypes = () => {
        let events = appConfig.eventTypes.map((event, index) => {
            return (
                <li key = {index}>
                    <a href= {event.href} className={event.class}>{event.name}</a>
                </li>
            )
        });

        return (
            <React.Fragment>
                {events}
            </React.Fragment>
        )
    }

    return (
        <div className="collapse navbar-collapse navbar-right " id="myNavbar">
          <ul className={"nav navbar-nav top-nav hide-on-" + hideView}>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
            {props.view === 'mobile' ? renderEventTypes() : ''}
          </ul>
        </div>
    )
}

export default NavbarRightContent;