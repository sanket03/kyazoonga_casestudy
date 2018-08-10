import React from 'react';

import appConfig from '../../utilities/config';

const FeaturedList = () => {

    const platformUrl = 'https://static3.kyazoonga.com/Images/featured-logo/';

    // Render featured platform list
    const renderFeaturedList = () => {
        let featuredList = appConfig.featuredList.map((platform, index) => {
            return (
                <React.Fragment>
                    <a target="_blank" href={platform.href}>
                        <img src={`${platformUrl}${platform.imgSrc}`} alt={platform.alt}/>
                    </a>
                </React.Fragment>
            )
        });

        return featuredList;
    }
    return (
        <section class="home-featured-sec text-center">
        <h2 class="site-title"><span>We've been featured in</span></h2>
        <div class="container-fluid">
            {renderFeaturedList()}
        </div>
      </section>
    )
}

export default FeaturedList;