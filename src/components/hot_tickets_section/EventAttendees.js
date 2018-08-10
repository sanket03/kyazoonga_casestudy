import React from 'react';

const EventAttendees = (props) => {
    
    const renderEventAttendees = (visitors) => {
        let attendees = visitors.map((visitor, index) => {
            return (              
                <a href={visitor.href}> <img src={visitor.imgSrc} alt=""/> </a>               
            )
        });
    }
    
    return (
        <React.Fragment>
            {renderEventAttendees(props.visitors)}
        </React.Fragment>
    );
}

export default EventAttendees;