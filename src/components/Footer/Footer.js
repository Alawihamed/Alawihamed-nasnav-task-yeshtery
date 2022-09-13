import React, { Component } from 'react';
import '../../Styles/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-box'>
                            <div className='logo-desc'>
                                <img src='../images/Footer/logo.svg' alt='footer-logo' />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    <br/>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                    molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut laoreet
                                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                                    et iusto odio dignissim qui blandit
                                </p>
                            </div>
                        </div>
                        <div className='footer-box'>
                            <div className='subscribe'>
                                <h6>Subscribe to our newsletter</h6>
                                <div className='subscribe-box'>
                                    <input type='text' placeholder='Enter Your Mail' />
                                    <button>Subscribe <img alt='subscribe-button' src='../images/Footer/send-icon.svg' /></button>
                                </div>
                                <div className='links-social'>
                                    <ul className='quick-link'>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Track Order</li>
                                        <li>Terms & Conditions</li>
                                        <li>Privacy Policy</li>
                                        <li>Sell With Us</li>
                                        <li>Shipping And Returns</li>
                                    </ul>
                                    <ul className='social'>
                                        <li><img alt='social-icon' src='../images/Footer/facebook.svg'/>/YESHTERY</li>
                                        <li><img alt='social-icon' src='../images/Footer/linkedin.svg'/>/YESHTERY</li>
                                        <li><img alt='social-icon' src='../images/Footer/instagram.svg'/>/YESHTERY</li>
                                        <li><img alt='social-icon' src='../images/Footer/twitter.svg'/>/YESHTERY</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='divided'></div>
                    <div className='copy-right'>
                        <div className='rights'>
                            <p>© 2021 yeshtery, all rights reserved.</p>
                        </div>
                        <div className='payments'>
                            <img alt='payment-icon' src='../images/Footer/cash.png' />
                            <img alt='payment-icon' src='../images/Footer/visa.png' />
                            <img alt='payment-icon' src='../images/Footer/master.png' />
                        </div>
                        <div className='powered'>
                            <span>Powered By</span>
                            <img alt='powered-icon' src='../images/Footer/nasnav.svg' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
