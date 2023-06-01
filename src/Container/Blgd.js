import React, { useParallax } from "react";
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";
import roundLog from "../imges/logocircle.png";
import TRADERS from "../imges/TRADERS.png";
import JEWELRS from "../imges/JEWELRS.png";
import EXPORT from "../imges/EXPORT.png";
import sildeimg from "../imges/slide-img.png";
import benifitimg from "../imges/banifit-img.png";
import Event1 from "../imges/Event1.png";
import Event2 from "../imges/Event2.png";
import Event3 from "../imges/Event3.png";
import face from "../imges/face.png";
import insta from "../imges/insta.png";
import youtube from "../imges/youtube.png";
import link from "../imges/link.png";
import twitter from "../imges/twitter.png";
import send from "../imges/send.png";
import { IoIosSend } from "react-icons/io";
import Ring from "../imges/Ring.png";
// import fullimg from "../imges/Rectangle 33.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Vertical from "../imges/Vertical Display Units H2 1.png";
// import process from "../imges/process.mp4";
import anime from "animejs/lib/anime.es.js";
// import "../style.css/swiper-bundle.min.css";
import footerring from "../imges/footerring.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Blgd(props) {

     return (
          <>
               <div className="header-sec">
                    <div className="container-fluid header-color">
                         <div className="d-flex justify-content-between">
                              <div>
                                   <a href="#">
                                        <img src={Logo} className="header-img" />
                                   </a>
                              </div>
                              <div>
                                   <a href="#">
                                        <img src={Menu} className="menu-img" />
                                   </a>
                              </div>

                         </div>
                    </div>
               </div>
               <div className="main-animation">
                    <div className="banner-sec all-sec">
                         {/* <video loop="loop" muted id="myVideo">
                    <source src={bannerVideo} type="video/mp4"></source>

                </video> */}

                         {/* <img src={Title} className='inner-banner  fixed' /> */}
                         <div className="container-fluid section">
                              <div className="first-banner">
                                   <p className="inner-banner fixed respo">Responsibly</p>
                                   <p className="inner-banner fixed  mt-5 grown">Grown, Beautifully Crafted.</p>
                                   {/* <img src={roundLog} className='inner-log' /> */}
                              </div>
                         </div>
                    </div>
                    <div className="reactors-sec all-sec intro">
                         <div className="section">
                              {/* <img src={Title2} className="reactor-fixed" /> */}
                              <div className="overlay overlay-1 ">
                                   <p className="reactor-fixed text-white counterOne" id="counter" data-max="6000" data-number="6000">
                                        <span className="ms-3">+</span>
                                   </p>
                                   <p className="fixed-reactors-title2 text-white mt-5">
                                        DIAMONDS MADE WITH STATE-OF-THE-ART CVD TECHNOLOGY.
                                   </p>
                                   <p className="fixed-reactor-title mt-5">Leading The Way To A Brighter, More Sustainable Future </p>
                                   <button className="fixed-reactor-button mt-3">Read More</button>
                              </div>

                              {/* <video src={process} className='reactor-video' type="video/mp4"></video> */}
                         </div>
                    </div>
                    {/* <section className='rsecton'>
                <h1 className='rh1'>REVOLUTIONARRY</h1>
            </section> */}
                    <div className="house-sec all-sec ">
                         <div className="container-fluid section">
                              <div className="overlay overlay-1">
                                   <p className="house-fixed text-white counterTwo" id="counter1" data-max="4" data-number="4">
                                        +
                                   </p>
                                   <p className="blgdTitle1-fixed mt-5 text-white">DEDICATED R&D LABS.</p>
                                   <p className="blgdTitle2-fixed mt-5">
                                        Shaping The Future Of Diamonds While Pushing The Boundaries Of Quality{" "}
                                   </p>
                                   <button className="fixed-house-button mt-5">Read More</button>
                              </div>
                              {/* <img src={blgdTital} className="house-fixed" /> */}
                              {/* <img src={blgdInnerTital1} className="blgdTitle1-fixed" /> */}
                              {/* <img src={blgdInnerTital2} className="blgdTitle2-fixed" />
                    <img src={reactorBtn} className="fixed-blgd-button" />
                    <img src={reactorBtnText} className="fixed-blgd-text" /> */}
                         </div>
                    </div>
                    <div className="process-sec all-sec">
                         <div className="container-fluid section">
                              <div className="overlay overlay-1">
                                   <p className="process-fixed text-white counterThree" id="counter2" data-max="2" data-number="2">
                                        {" "}
                                        Million +
                                   </p>
                                   <p className="process-title1 text-white">DIAMOND POLISHING CAPACITY</p>
                                   <p className="process-title2 text-white">Carving Brilliance With Precision.</p>
                                   <p className="process-title3">With High-tech Facilities And Experts, Bringing Brilliance To Life </p>
                                   <button className="fixed-blgd-button">Read More</button>
                              </div>
                         </div>
                         {/* <video
            className="process-video"
            id="v0"
            tabindex="0"
            autobuffer="autobuffer"
            preload="preload"
          >
            <source src={process} type="video/mp4" />
          </video> */}
                    </div>
               </div>

               <div className="type-sec container-fluid">
                    {/* <img src={Ring} /> */}
                    <div className="row">
                         <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0 type-diamand">
                              <img src={Ring} className="w-100 h-100" />
                         </div>
                         <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0">
                              <div className="inner-type ">
                                   <div className="type-main container">
                                        <div className="new-type">
                                             <p className="type-diamond mb-5">
                                                  TYPE IIA<span className="ms-2">DIAMONDS</span>
                                             </p>
                                             <p className="type-para">
                                                  Type IIA a are a highly coveted type of diamond known for its purity and beauty as they
                                                  are made up of 100% carbon atoms with no measurable nitrogen or boron impurities.{" "}
                                             </p>
                                             <p className="type-para mt-0 mb-5">
                                                  We are proud to offer you the best quality type 2 a gems created in bhanderi labs.
                                             </p>
                                             <button className="type-diamond-button">Read More</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container">
                    <div className="audience">
                         {/* <p className='type-diamond audiance-p'>AUDIENCE<span className='ms-2'>TYPE</span></p> */}
                         <div className="row inner-audience">
                              <div className="col-4  col col-sm-12 col-lg-4 col-md-4 col-12 p-0">
                                   <div className="audiance-img1">
                                        <h6>TRADERS</h6>
                                        <p>A Perfect Size For Everyone, With Our Vast Inventory.</p>
                                        <img src={TRADERS} />
                                        <button className="audiance-button">Read More</button>
                                   </div>
                              </div>
                              <div className="col-4 col col-sm-12 col-lg-4 col-md-4 col-12 p-0">
                                   <div className="audiance-img2">
                                        <h6>JEWELRS</h6>
                                        <p>Infinite Possibilities, In Our Veritable Treasure Trove Of Diamonds</p>
                                        <img src={JEWELRS} />
                                        <button className="audiance-button">Read More</button>
                                   </div>
                              </div>
                              <div className="col-4  col col-sm-12 col-lg-4 col-md-4 col-12 p-0">
                                   <div className="audiance-img3">
                                        <h6>EXPORT</h6>
                                        <p>The Epitome Of Quality And Ethics, Exported Globally.</p>
                                        <img src={EXPORT} />
                                        <button className="audiance-button">Read More</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container-fulid slider-sec slider">
                    <div className="inner-slider slide-track">
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                         <div className="slide">
                              <img src={sildeimg} />
                         </div>
                    </div>
               </div>

               <div className="benifit-main">
                    <div className="container p-0">
                         <div className="d-flex benifitrow">
                              <div className=" benifit-left">
                                   <div className="benifit-inner">
                                        <p className="benifit">UNMATCHED BENEFITS OF LAB</p>
                                        <span className="mb-5">GROWN DIAMONDS</span>
                                   </div>
                                   <p className="benifit-p mb-5">
                                        Uncover More Reasons To Choose Lab Grown Diamonds: A Deep Dive Into Their Advantages.
                                   </p>
                                   <div className="benifit-list">
                                        <div className="list-left">
                                             <ul>
                                                  <li>Manufacturing Time</li>
                                                  <li>Economical Price</li>
                                                  <li>Exceptional Value Proposition</li>
                                             </ul>
                                        </div>
                                        <div className="list-right">
                                             <ul>
                                                  <li>Traceable Origin</li>
                                                  <li>Socially Responsible</li>
                                                  <li>Smaller Environmental Impact</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="benifit-right">
                                   <div id="benifit-img"></div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container mb-5">
                    <div className="d-flex justify-content-between">
                         <p className="type-diamond audiance-p">
                              UPCOMING<span className="ms-2">EVENT</span>
                         </p>
                         <select className="select-box form-control">
                              <option value="select year">Select Year</option>
                              <option value="2022">2020</option>
                              <option value="2022">2021</option>
                              <option value="2022">2022</option>
                              <option value="2022">2023</option>
                         </select>
                    </div>
                    <div className="event-sec row">
                         <OwlCarousel className='owl-theme container loop' loop margin={10} nav>
                              <div className="col-4  col col-sm-12 col-lg-4 col-md-4 col-12 p-0 inner-event-sec item">
                                   <div className="event-img">
                                        <img src={Vertical} />
                                        <div className="event-date">
                                             25
                                             <p>JUN</p>
                                        </div>
                                   </div>

                                   <div className="discription">
                                        <h1>THE #1 JEWELRY TRADE SHOWIN THE WORLD</h1>
                                        <h3>Ethically Crafted Diamonds</h3>
                                        <p>BOOTH #3109</p>
                                   </div>
                              </div>
                              <div className="col-4  col col-sm-12 col-lg-4 col-md-4 col-12 p-0 item">
                                   <div className="event-img">
                                        <img src={Vertical} />
                                        <div className="event-date">
                                             25
                                             <p>JUN</p>
                                        </div>
                                   </div>
                                   <div className="discription">
                                        <h1>THE #1 JEWELRY TRADE SHOWIN THE WORLD</h1>
                                        <h3>Ethically Crafted Diamonds</h3>
                                        <p>BOOTH #3109</p>
                                   </div>
                              </div>
                              <div className="col-4  col col-sm-12 col-lg-4 col-md-4 col-12 p-0 item">
                                   <div className="event-img">
                                        <img src={Vertical} />
                                        <div className="event-date">
                                             25
                                             <p>JUN</p>
                                        </div>
                                   </div>
                                   <div className="discription">
                                        <h1>THE #1 JEWELRY TRADE SHOWIN THE WORLD</h1>
                                        <h3>Ethically Crafted Diamonds</h3>
                                        <p>BOOTH #3109</p>
                                   </div>
                              </div>
                         </OwlCarousel>
                    </div>
               </div>

               {/* <div className='item'><h4>1</h4></div>
                    <div className='item'><h4>2</h4></div>
                    <div className='item'><h4>3</h4></div>
                    <div className='item'><h4>4</h4></div> */}

               {/* true footer */}
               <div className='footer-bg'>
                    <div className='container-fluid main-footer'>
                         <div className='row align-items-center'>
                              <div className='col col-lg-6 col-md-12 col-sm-12 p-5'>
                                   <img src={footerring} className='w-100 footer-ring' />
                              </div>
                              <div className='col col-lg-6 col-md-12 col-sm-12 p-0 footer-right'>
                                   <h5 className='mb-5'><span>WE SEND REALLY</span>
                                        GOOD EMAILS.</h5>

                                   <div className='d-flex main-input-box'>
                                        <div className='input'>
                                             <input className='from-control text-white' placeholder='Enter Your Email Id To Subscribe' />
                                        </div>
                                        <div className='footer-btn1 ms-3 btn btn'><IoIosSend className='f-icon' /></div>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div className="footer mt-4">
                         <div className="container container-md container-lg container-sm">
                              <div className="row inner-footer">
                                   <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
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
                                   <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
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
                                   <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
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
                                   <div className="col-3 col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
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

               {/* true footer */}

               <div className='container-fluid main-footer'>
                         <div className='row align-items-center'>
                              <div className='col col-lg-6 col-md-12 col-sm-12 p-5'>
                                   <img src={footerring} className='w-100 footer-ring' />
                              </div>
                              <div className='col col-lg-6 col-md-12 col-sm-12 p-0 footer-right'>
                                   <h5 className='mb-5'><span>WE SEND REALLY</span>
                                        GOOD EMAILS.</h5>

                                   <div className='d-flex main-input-box'>
                                        <div className='input'>
                                             <input className='from-control text-white' placeholder='Enter Your Email Id To Subscribe' />
                                        </div>
                                        <div className='footer-btn1 ms-3 btn btn'><IoIosSend className='f-icon' /></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               <dl className="nav-multi-col respo-footer container">
                    <div className="nav-multi-col__column">
                         <dt role="heading" aria-level={4}>
                              <button className="nav-multi-col__trigger" aria-controls="sect1" id="navcol1" type="button">
                                   <h2 className="nav-multi-col__heading">QUICK LINKS<i className="fas fa-plus" /></h2>
                              </button>
                         </dt>
                         <dd id="sect1" role="region" aria-labelledby="navcol1" className="nav-multi-col__panel">
                              <ul className="nav-multi-col__list">
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                              </ul>
                         </dd>
                    </div>
                    <div className="nav-multi-col__column">
                         <dt role="heading" aria-level={4}>
                              <button className="nav-multi-col__trigger" aria-controls="sect2" id="navcol2" type="button">
                                   <h2 className="nav-multi-col__heading">Heading 2 <i className="fas fa-plus" /></h2>
                              </button>
                         </dt>
                         <dd id="sect2" role="region" aria-labelledby="navcol2" className="nav-multi-col__panel">
                              <ul className="nav-multi-col__list">
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                              </ul>
                         </dd>
                    </div>
                    <div className="nav-multi-col__column">
                         <dt role="heading" aria-level={4}>
                              <button className="nav-multi-col__trigger" aria-controls="sect3" id="navcol3" type="button">
                                   <h2 className="nav-multi-col__heading">Heading 3 <i className="fas fa-plus" /></h2>
                              </button>
                         </dt>
                         <dd id="sect3" role="region" aria-labelledby="navcol3" className="nav-multi-col__panel">
                              <ul className="nav-multi-col__list">
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                              </ul>
                         </dd>
                    </div>
                    <div className="nav-multi-col__column">
                         <dt role="heading" aria-level={4}>
                              <button className="nav-multi-col__trigger" aria-controls="sect4" id="navcol4" type="button">
                                   <h2 className="nav-multi-col__heading">Heading 4 <i className="fas fa-plus" /></h2>
                              </button>
                         </dt>
                         <dd id="sect4" role="region" aria-labelledby="navcol4" className="nav-multi-col__panel">
                              <ul className="nav-multi-col__list">
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                                   <li className="nav-multi-col__list-item"><a href="#" className="nav-multi-col__link">link.title</a><i className="fas fa-chevron-right" /></li>
                              </ul>
                         </dd>
                    </div>
               </dl>




               {/* <div className="footer">
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
                                        <li>
                                             <a href="#">Contact Us</a>
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
                                   <h6 className="footer-head pb-0">NEWSLETTER SUBSCRIPTION</h6>
                                   <div className="d-flex">
                                        <input className="footer-input" placeholder="Enter Your Email Id To Subscribe"></input>
                                        <button className="footer-btn">
                                             <IoIosSend />
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <p className="copy-right m-0 text-center">Copyright © 2023 Bhanderi Lab Grown Diamonds. All Rights Reserved</p>
                    </div>
               </div> */}

          </>
     );
}

export default Blgd;
