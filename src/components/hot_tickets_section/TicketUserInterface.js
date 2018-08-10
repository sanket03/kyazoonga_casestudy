import React from 'react';

import EventAttendees from './EventAttendees';

const TicketUserInterface = (props) => {
    
    // const renderAttendees = (visitors) => {
    //     let attendees = visitors.map((visitor, index) => {
    //         return (
    //             <React.Fragment>
    //                 <a href={visitor.href}> <img src={visitor.imgSrc} alt=""/> </a>
    //             </React.Fragment>
    //         )
    //     });
    // }

    
    return (
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="box">
                {
                    props.visitors.length > 0 ? (
                                                    <div className="dropdown visiter-icon">
                                                    <a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
                                                    <div className="dropdown-menu">
                                                        <p>{`Who's attending (${props.visitors.length})`}</p>
                                                            <EventAttendees visitors = {props.visitors}/>
                                                    </div>
                                                    </div>)
                                                : ''
                    }
                <a href="#" className="block-link">
                  <div className="ticket-img">
                    <img src={props.imgSrc} alt=""/>
                    <span className="ticket-price">{props.price}</span>
                  </div>
                  <div className="ticket-info">
                    <span className="time-info">{props.time}</span>
                    <h3 className="ticket-title">{props.title}</h3>
                    <p className="venue-info">{props.venue}</p>
                  </div>
                </a>
                <div className="social clearfix">
                  <div className="pull-left">
                    <a className="btn btn-default btn-xs ical" href="#">
                      <i className="fa fa-calendar"></i> &nbsp;iCal
                    </a>
                    <a className="btn btn-default btn-xs ml-10" href="#">
                      <i className="fa fa-calendar"></i> &nbsp;Google
                    </a>
                  </div>
                  <div className="pull-right">
                    <a className="btn btn-default btn-xs btn-circle" href="#">
                    <i className="fa fa-facebook"></i></a>
                    <a className="btn btn-default btn-xs btn-circle" href="#">
                    <i className="fa fa-twitter"></i></a>
                    <a className="btn btn-default btn-xs btn-circle" href="#">
                    <i className="fa fa-twitter"></i></a>
                    <a className="btn btn-default btn-xs btn-circle" href="#">
                  <i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>   
    );
}

export default TicketUserInterface;