import React from 'react';

import appConfig from '../../utilities/config';

const Categories = () => {
    
    // Render event categories
    const renderCategories = () => {
        let categories = appConfig.eventTypes.map((event, index) => {
            if(event.imgSrc.length > 0) {
                return (
                    <div className="col-sm-4 cat-box" key = {index}>
                        <a href={event.href} className="block-link">
                            <div className="cat-txt">
                            <h3>{event.name}</h3>
                            </div>
                            <img src={event.imgSrc} alt="" className="img-full-width"/>
                        </a>
                    </div>
                );
            } else {
                return '';
            }
        });
        return categories;
    }
    
    return (
        <section className="home-cat-sec text-center">
            <div className="container">
                <h2 className="site-title">Browse by top categories</h2>
                <div className="row">
                    {renderCategories()}
                </div>
            </div>
        </section>
    );
}

export default Categories;