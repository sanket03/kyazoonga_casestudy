import React, { Component } from 'react';

import BannerSearchBox from './BannerSearchBox';
import CarouselItems from './CarouselItems'
import appConfig from '../../utilities/config';

class Carousel extends Component {

    // Render event types
    renderEventTypes()  {
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

    renderCarouselItems() {
        let carouselItems = appConfig.carouselItems.map((item, index) => {
            return (
                <CarouselItems index = {index} imgSrc = {item.imgSrc} videoPoster = {item.videoPoster} videoSrc = {item.videoSrc} key = {index}/>
            )
        });

        return carouselItems;
    }

    render() {
        return (
            <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
                <h1>Tickets made simple for everyone, everywhere</h1>
                <div className="site-manu container">
                    <div className="collapse navbar-collapse hide-on-mobile">
                        <ul className="nav navbar-nav sub-main-nav">
                            {this.renderEventTypes()}
                        </ul>
                    </div>
                    <BannerSearchBox />
                </div>

                <div className="carousel-inner">
                    {this.renderCarouselItems()}
                </div>       
          </div>
        );
    }
}

export default Carousel;