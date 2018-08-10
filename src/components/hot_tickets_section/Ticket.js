import React, { Component } from 'react';

import TicketUserInterface from './TicketUserInterface';
import appConfig from '../../utilities/config';

class Ticket extends Component {

    // Render event tickets
    renderTickets() {
      let tickets = appConfig.tickets.map((ticket, index) => {
        return (
          <TicketUserInterface key = {index} {...ticket} />
        )
      })

      return tickets;
    }

    render() {
        return (
            <section className="hot-ticket-sec ticket-boxes">
              <div className="container">
                <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
                <div className="row">
                  {this.renderTickets()}
                </div>
                <div className="btn-sec text-center p-20 pt-0">
                  <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
                </div>
              </div>
          </section>
        );
    }
}

export default Ticket;
