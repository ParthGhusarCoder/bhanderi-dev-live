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
import '../style.css/Traders.css'
import innertraders from '../imges/innertradar1.png'

function Traders(props) {
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


            <div className='main-img'>
                <div className='container'>
                    <h1 className='mainheading'>Discover A New Era Of
                        Trading Brilliance With Bhanderi
                        Lab Grown Diamonds</h1>
                </div>
            </div>
            <div className='container'>
                <h2 className='sec-heading'>Welcome To Bhanderi Lab Grown Diamonds
                    Your Trusted Source For High-quality Lab
                    Grown Diamonds</h2>

                <p className='trader-pare'>We Are Your Premier Destination For Top-notch Lab Diamonds That Embody Both Beauty And Responsibility. At Bhanderi, We Understand The Importance Of Offering Your Customers Exceptional Products That Align With Their Values. That's Why We Provide An Extensive Collection Of Lab Grown Diamonds, Meticulously Crafted To Meet The Highest Industry Standards. By Choosing Our Diamonds, You Are Offering Your Customers A Sustainable And Eco-friendly Alternative Without Compromising On Quality.</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='col-6'>
                            <img src={innertraders} className='innertrader1'/>
                        </div>
                        <div className='col-6 trader-description'>

                        </div>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-4'></div>
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

export default Traders;