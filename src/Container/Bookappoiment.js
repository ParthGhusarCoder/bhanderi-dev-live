import React from 'react';
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";
import '../style.css/style.css';
import face from "../imges/face.png";
import insta from "../imges/insta.png";
import youtube from "../imges/youtube.png";
import link from "../imges/link.png";
import twitter from "../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from '../imges/footerring.png'
import '../style.css/Bookappoiment.css'
import date from '../imges/date.png'
import time from '../imges/time.png'

function Bookappoiment(props) {
    return (
        <>
            <div className="header-sec">
                <div className="container-fluid header-color">
                    <div className="d-flex justify-content-between">
                        <div>
                            <a href="#">
                                <img src={Logo} className='header-img' />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={Menu} className='menu-img' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2 className='main-heading'>Book Appointment </h2>
                <div className='appoiment-date'>
                    <p>Appoinment Date</p>
                    <div className='d-flex'>
                        <input className='form-control' type='text' placeholder="MM / DD / YYYY" />
                        <button><img src={date} /></button>
                    </div>

                </div>
                <div className='appoiment-time'>
                    <p>Appoinment Time</p>
                    <div className='d-flex'>
                        <input className='form-control' type='text' placeholder="HH / MM / DD" />
                        <button><img src={time} /></button>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='appoiment-time'>
                            <p>Email</p>
                            <div className='d-flex'>
                                <input className='form-control pb-4' type='text' placeholder='Enter Email Address' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='appoiment-time'>
                            <p>Contact Number</p>
                            <div className='d-flex'>
                                <input className='form-control pb-4' type='text' placeholder="Enter Number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='appoiment-time'>
                            <p>First Name</p>
                            <div className='d-flex'>
                                <input className='form-control pb-4' type='text' placeholder='Enter First Name' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='appoiment-time'>
                            <p>Last Name</p>
                            <div className='d-flex'>
                                <input className='form-control pb-4' type='text' placeholder="Enter Last Name" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='appoiment-time'>
                    <p>Adresss</p>
                    <div className='d-flex'>
                        <input className='form-control pb-4' type='text' placeholder='Enter Street Address' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='appoiment-time mt-5'>
                            <div className='d-flex'>
                                <select className='pb-4 selectCity' placeholder='Select City'>
                                    <option value="">Select City</option>
                                    <option value="">Surat</option>
                                    <option value="">US</option>
                                    <option value="">UK</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='appoiment-time mt-5'>
                            <div className='d-flex'>
                                <select className='pb-4 selectCity' placeholder='Select City'>
                                    <option value="">Select Region</option>
                                    <option value="">Surat</option>
                                    <option value="">US</option>
                                    <option value="">UK</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='appoiment-time'>
                            <div className='d-flex'>
                                <input className='form-control pb-4' type='text' placeholder="Enter Zipcode" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='appoiment-time'>
                            <div className='d-flex'>
                                <select className='pb-4 selectCity' placeholder='Select Country'>
                                    <option value="">Select Region</option>
                                    <option value="">Surat</option>
                                    <option value="">US</option>
                                    <option value="">UK</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='appoiment-time'>
                    <p>Comments</p>
                    <div className='d-flex'>
                        <textarea className='form-control1 p-4' rows="15" cols="200"/>
                    </div>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='check d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <input type='checkbox' className='me-5' />
                        <p>By Submitting, You Confirm You Have Read And Accept Our <a href='#' className='text-dark'>Privacy Policy</a>.</p>
                    </div>
                    <button>BOOK APPOIMENT</button>
                </div>
            </div>

            <div className='footer-bg'>
                <div className='container-fluid main-footer'>
                    <div className='row align-items-center'>
                        <div className='col-6 col-lg-7 p-5'>
                            <img src={footerring} className='w-100' />
                        </div>
                        <div className='col-6 col-lg-5 p-0 footer-right'>
                            <h5 className='mb-5'><span>WE SEND REALLY</span>
                                GOOD EMAILS.</h5>

                            <div className='d-flex'>
                                <div className='input'>
                                    <input className='from-control text-white' placeholder='Enter Your Email Id To Subscribe' />
                                </div>
                                <div className='footer-btn1 ms-3 btn btn'><IoIosSend className='f-icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="footer mt-4">
                    <div className="container">
                        <div className="row inner-footer">
                            <div className="col-3">
                                <h6 className="footer-head">QUICK LINKS </h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Process</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h6 className="footer-head">LOCATION</h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Surat</a>
                                    </li>
                                    <li>
                                        <a href="#">Mumbai</a>
                                    </li>
                                    <li>
                                        <a href="#">New York</a>
                                    </li>
                                    <li>
                                        <a href="#">Europe</a>
                                    </li>
                                    <li>
                                        <a href="#">Hong Kong</a>
                                    </li>
                                    <li>
                                        <a href="#">Dubai</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h6 className="footer-head">LEGAL</h6>
                                <ul className="footer-li">
                                    <li>
                                        <a href="#">Privacy Statement</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="#">Cookie Policy</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-3">
                                <h6 className="pb-2 footer-head">CONNECT WITH US :</h6>
                                <div className="footer-icon pb-5">
                                    <img src={face} />
                                    <img src={insta} />
                                    <img src={youtube} />
                                    <img src={link} />
                                    <img src={twitter} />
                                </div>
                                <div className="d-flex">

                                </div>
                            </div>
                        </div>
                        <p className="copy-right m-0 text-center">
                            Copyright © 2023 Bhanderi Lab Grown Diamonds. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bookappoiment;