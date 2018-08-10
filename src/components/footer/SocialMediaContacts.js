import React from 'react';

import facebookImg from '../../images/facebook.png'
import twitterImg from '../../images/twitter.png'
import instagramImg from '../../images/instagram.png'
import snapchatImg from '../../images/snapchat.png'
import linkedinImg from '../../images/in.png'
import googleImg from '../../images/google.png'
import youtubeImg from '../../images/youtube.png'
import pinterestImg from '../../images/pinterest.png'

const SocialMediaContacts = () => {
    return (
        <div class="footer-social text-center">
            <h6>Follow Us</h6>
            <ul>
                <li>
                    <a class="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
                        <img src={facebookImg} alt="Facebook" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
                        <img src={twitterImg} alt="Twitter" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
                        <img src={instagramImg} alt="in" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
                        <img src={snapchatImg} alt="in" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="in" href="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
                        <img src={linkedinImg} alt="Linkedin" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
                        <img src={youtubeImg} alt="Youtube" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="g" href="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
                        <img src={googleImg} alt="Google Plus" width="32" height="32"/>
                    </a>
                </li>
                <li>
                    <a class="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
                        <img src={pinterestImg} alt="Pinterest" width="32" height="32"/>
                    </a>
                </li>
            </ul>
            <p class="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
        </div> 
    );
}

export default SocialMediaContacts;