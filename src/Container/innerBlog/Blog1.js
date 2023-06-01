import React from 'react';
import Logo from "../../imges/logo.png";
import Menu from "../../imges/Frame.png";
import '../../style.css/style.css';
import face from "../../imges/face.png";
import insta from "../../imges/insta.png";
import youtube from "../../imges/youtube.png";
import link from "../../imges/link.png";
import twitter from "../../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from '../../imges/footerring.png'

function Blog1(props) {
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
            <div className='container-fluid p-0'>
                <div className='blogImg'></div>
            </div>
            <div className='container'>
                <div className='contain-area'>
                    <div className='first-pare'>
                        <h1 className='mb-3'>COMPLETE GUIDE TO LAB GROWN DIAMONDS</h1>
                        <span className='mb-2'>June 08, 2022</span>
                        <h2 className='mt-3 mb-3 inner-title-1'>Lab Grown Diamonds: Changing The Diamond Industry</h2>
                        {/* <h3 className='mb-4'>Complete Drive Through A Lab Grown Diamonds</h3> */}
                        <p className='mb-4'>Lab grown diamonds have been popular around for quite eventually now. The buzz, hype, and growing demand is reaching new levels each passing day. Choosing a diamond ain’t an easy task. It can be hectic and confusing and can create many questions as the diamond comes in various options, such as numerous sizes and shapes. Shopping for an engagement ring, promise ring, and wedding band can be an enormous feeling in this era. With such variations in shapes, styles, and sizes, opting for and finalizing one can be extremely difficult.</p>
                        <p className='mb-4'>With the increase in popularity of Lab created Diamonds, there has been a great option for the common man to purchase a diamond or ornaments as one cannot afford the real diamond. Also, those fascinated by Real Diamond now have more options to consider whether to buy real diamonds or Lab Grown Diamonds.</p>
                        <p className='mb-4'>Since we are now aware of the two types of diamonds – Mined diamonds and <a href='https://blgdlab.com/' target='_blank' className='text-dark'>LAB GROWN DIAMONDS</a>, let’s jump into what settles this Lab Grown Diamond apart from Mined Diamonds. Though it is a personal choice and preference that depends on the person purchasing but Lab made Diamonds are surely a blessing. Lab grown diamonds look and feel just like the natural diamond mined from the Earth. It is almost virtually impractical for a naked eye of an average person to find the difference between the two of them. Lab grown diamonds and mined diamonds are almost indistinguishable because of their similar chemical structures and identical looks. Even with these similarities, there have been huge differences in their prices and formation.</p>
                        <p className='mb-5'>Lab created diamonds are a rapidly growing vogue in the diamond industry. With the advancement in Technology, Lab grown have made rapid advances through the years. Here is a complete lab grown Diamond guide for you!</p>
                    </div>
                    <div className='second-pare'>
                        <h3 className='mb-5'>Lab Grown Diamonds – The Clarity</h3>
                        <p className='mb-4'>Lab Grown diamonds are created or incorporated in the Laboratories, as the name suggests. They contain the same chemical composition and structure as naturally occurring diamonds. The naked eye of an average person cannot differentiate between the two because they are chemically and optically identical.</p>
                    </div>
                    <div className='third-pare'>
                        <h3 className='mb-5'>Lab Grown Diamonds – The Saga</h3>
                        <p className='mb-4'>Researchers And Scientists Tracked Down Diamonds That Consisted Of Pure Carbon In 1797. Different Experimenters Declared They Successfully Made A Diamond. Method Of Formation In That Era Included Heating Charcoal At A Very High Temperature With Iron Inside A Carbon In A Boiler. Many Other Scientists Tried To Recreate The Diamond With The Same Procedure But Failed To Reproduce The Replica. That Is When The Idea Of Lab Grown Diamond Evolved. With Time, One Did Improvements In Technology And Procedures To Enrich The High-quality Making Of Lab Grown Diamonds.</p>
                    </div>
                    <div className='third-pare'>
                        <h3 className='mb-5'>Lab Grown Diamonds Vs. Real</h3>
                        <p className='mb-4'>Mined diamonds known today in the industry were formed with extensive high heat and temperature, causing the Carbon to rearrange its atomic structure and form a hard solid substance form of a diamond under the surface of Earth. On the other hand, Lab Grown Diamonds are created using high pressure, High Temperature (HPHT), and Chemical Vapor Deposition (CVD). Also, it takes weeks to form a Lab Grown Diamond in the laboratory, whereas real diamonds take billions of years to their form.</p>
                        <p className='mb-4'>There is no visible difference between the Man made Diamonds vs. Real in appearance. Moreover, even the professional will need specialized tools and apparatus to spot the difference. Additionally, even a high-quality lab grown diamond will be classified on the same scale as a natural diamond when it comes to the gem's color. They convey the same shine of brilliance and sparkle as the mined diamond.</p>
                        <p className='mb-4'>Lab grown diamonds are made of the same carbon structure as natural diamonds. They are remained to be the hardest substance on the Earth. Thus, they are as durable as natural diamonds in terms of durability.</p>
                        <p className='mb-4'>The 4’c are huge visual properties of a Diamond. They are Carat, Cut, Color, and Clarity. These 4 properties are classified to identify the size and quality of a diamond, which are attributes in the pricing of a Diamond. Lab created Diamonds are much more cost-effective when purchasing than mined diamonds as it takes many years for nature to produce a mined diamond, whereas Lab grown are created in a matter of weeks.</p>
                    </div>

                    <div className='third-pare'>
                        <h3 className='mb-5'>Lab Grown Diamonds - The Trend</h3>
                        <p className='mb-4'>Lab made diamonds have drawn a lot of attention in the diamond industry. It has it all, from engagement rings promise rings, and wedding bands. Comes in numerous shapes, and styles, it gives you that glamorous feel just like the natural one. Because of the rare nature existence of mined diamond which takes years to form in the valley of Earth, Lab created diamonds have risen to popularity and fame in the past few years till the present day. It has created a lot of exposure in the world of the diamond industry.</p>
                    </div>
                    <div className='third-pare'>
                        <h3 className='mb-5'>Are Lab Diamonds Dignitary Enough?</h3>
                        <p className='mb-4'>Well, an absolute yes!</p>
                        <p className='mb-4'>Unless you are not concerned with the rare expensiveness of a real diamond with hefty pricing, <a href='https://blgdlab.com/lab-created-diamonds-manufacturer.html' target='_blank' className='text-dark'>lab created diamonds</a> is surely a pick. There are plenty of reasons to choose Lab grown over mined diamonds. It is a personal choice in the first place and the person who is choosing. Lab grown weigh more than naturally mined diamonds because tons of Earth have to be mined to extract a single carat of a real diamond.</p>
                        <p className='mb-4'>Moreover, it depends on the purchaser to make the final decision. Some women generally do not have choices as they are just happy with marrying the man of their life, whereas some have dreams about what they want and therefore end up having the idea of what they want.</p>
                    </div>
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

export default Blog1;