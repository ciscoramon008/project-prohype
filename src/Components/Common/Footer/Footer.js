import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer bg-dark text-white py-4'>
            <div className='container'>
                <div className='row justify-content-center justify-content-md-start'>
                    <div className='col-10  col-md-4 my-2'>
                        <h3>COMPANY</h3>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li>Privacy Policy</li>
                        <div className='mt-3'>
                            <Link className="btn btn-outline-success mr-1"><i className="fa fa-facebook"></i></Link>
                            <Link className="btn btn-outline-success mr-1"><i className="fa fa-instagram"></i></Link>
                            <Link className="btn btn-outline-success mr-1"><i className="fa fa-whatsapp"></i></Link>
                            <Link className="btn btn-outline-success mr-1"><i className="fa fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className='col-10 col-md-4 my-2'>
                        <h4>Quick Links</h4>
                        <li><Link to='/services'>Services</Link></li>
                        <li>Team</li>
                        <li>Join Us</li>
                    </div>
                    <div className='col-10 col-md-4 my-2'>
                        <h4>Get in touch with us!</h4>
                        <p><i className="fa fa-envelope mr-2"></i>example@gmail.com</p>
                        <p><i className="fa fa-phone mr-2"></i>+91 9995551113</p>
                        <p><i className="fa fa-map-marker mr-2"></i>building 8, ML lane</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;