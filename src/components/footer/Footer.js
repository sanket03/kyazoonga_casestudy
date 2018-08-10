import React,{Component} from 'react';

import NewsLetter from './NewsLetter';
import FooterLinks from './FooterLinks';
import SocialMediaContacts from './SocialMediaContacts';
import footerBackground from '../../images/ftr-bg.jpg';

class Footer extends Component {
    render() {
        return (
            <footer class="site-footer" style = {{backgroundImage: `url(${footerBackground})`}}>
                <div class="container">
                    <NewsLetter />
                    <FooterLinks />
                    <SocialMediaContacts />
                </div>
          </footer>
        )
    }
}

export default Footer;