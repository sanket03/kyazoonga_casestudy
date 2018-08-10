import React from 'react';

import australianFlag from '../../images/CountriesFlag/aus.png';
import indianFlag from '../../images/CountriesFlag/ind.png';
import irelandFlag from '../../images/CountriesFlag/ireland.png';
import uaeFlag from '../../images/CountriesFlag/uae.png';
import usaFlag from '../../images/CountriesFlag/usa.png';

const FooterLinks = () => {
    return (
        <div class="row footer-links">
            <div class="col-sm-3">
                <h6>Help</h6>
                <ul>
                    <li><a href="#">24x7 Customer Service</a></li>
                    <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                    <li><a href="#">Reprint Confirmation</a></li>
                    <li><a href="#">Regenerate-e-Ticket</a></li>
                    <li><a href="#">Track Courier</a></li>
                </ul>
                </div>
            <div class="col-sm-3">
                <h6>Company</h6>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Policies</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h6>Popular Events</h6>
                <ul>
                    <li><a href="#">EsselWorld</a></li>
                    <li><a href="#">KidZania</a></li>
                    <li><a href="#">Water Kingdom</a></li>
                    <li><a href="#">Water Kingdom</a></li>
                    <li><a href="#">Adventure Park</a></li>
                    <li><a href="#">Vineyard Tour & Cycling</a></li>
                </ul>
            </div>
            <div class="col-sm-3 country-flag-sec">
                <h6>Popular Events</h6>
                <ul>
                    <li><a href="http://www.kyazoonga.com.au/" target="_blank"><img src={australianFlag}/>Australia</a></li>
                    <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={indianFlag}/>India</a></li>
                    <li><a href="http://www.kyazoonga.ie/" target="_blank"><img src={irelandFlag}/>Ireland</a></li>
                    <li><a href="http://www.kyazoonga.ae/" target="_blank"><img src={uaeFlag}/>United Arab Emirates</a></li>
                    <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={usaFlag}/>United States</a></li>
                </ul>
            </div>
        </div>
    );
}

export default FooterLinks;