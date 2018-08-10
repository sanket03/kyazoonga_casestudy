import React from 'react';

const BannerSearchBox = () => {

    return (
        <div className="banner-serch-box">
            <input 
                className="" name="q" 
                defaultValue="" 
                placeholder="Search for an event, venue or city" 
                type="text" 
            />
            <a href="javascript:void(0);">
                <i className="fa fa-search" aria-hidden="true"></i>
            </a>
        </div>
    );
}

export default BannerSearchBox;