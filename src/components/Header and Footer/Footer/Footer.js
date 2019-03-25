import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'wrapper'}>
            <div className="footer">
                <div className="links-list">
                    <Link to="/aboutus">
                        <div><h2 className="link-title">
                            About Us
                        </h2></div>
                    </Link>
                    <Link to="/products">
                        <div><h2 className="link-title">
                            Products
                        </h2></div>
                    </Link>
                    <Link to="/contact">
                        <div><h2 className="link-title">
                            Contact Us
                        </h2></div>
                    </Link>
                </div>
                <div className="social-icons">
                    <div>Follow Us on Social Networks</div>
                    <ul>
                        <Link to="https://www.facebook.com/"><li><i className="fab fa-facebook-f"></i></li></Link>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="far fa-envelope"></i></li>
                    </ul>
                </div>
                <div className="copyright">
                    <div className="copyright-text">&copy;2019 Arman Matevosyan: All Rights Reserved</div>
                    <div className='d-flex align-content-around'>
                        <Link to="/privacy">
                            <div><h2 className="link-title">
                                Privacy Policy
                            </h2></div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;