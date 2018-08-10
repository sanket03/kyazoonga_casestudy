import React from 'react';

const CarouselItems = (props) => {
    
    let {
        index,
        imgSrc,
        videoSrc,
        videoPoster
    } = props;

    return (
        <div data-slide={index} className={index === 0 ? "item active" : "item"}>
            <img src={imgSrc} alt="" className="hide-on-desktop"/>
                <div className="hide-on-mobile">
                    <video title={index} id={`bgvid${index}`} autoPlay loop muted poster={videoPoster}>
                    <source src={videoSrc} type="video/mp4"/>Your browser does not support the video tag.</video>
                </div>
        </div>
    );
}

export default CarouselItems;