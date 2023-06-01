import React from 'react';
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";
import '../style.css/style.css'

function Project(props) {
    return (
        <>
            <div className="header-sec header-color">
                <div className="container">
                    <div className="d-flex justify-content-between pt-2 pb-2">
                        <div>
                            <a href="#">
                                <img src={Logo} />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={Menu} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>














            <section class="footer ">
                <div class="row align-items-center">
                    <div class="col-md-6 ">
                        <img src="img/footer-img.png" alt="" class="footer-img" />
                    </div>
                    <div class="col-md-6">
                        <div class="footer-text-box">
                            <p class="footer-heading">We send really <br />
                                <span>good emails.</span>
                            </p>

                            <form class="example" action="action_page.php">
                                <input type="text" placeholder="enter your email id to subscribe" name="search"
                                    class="search-input" />
                                <button type="submit" class="submit-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24"
                                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10 14l11 -11"></path>
                                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5">
                                        </path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center ">
                    <div class="col-md-10">
                        <div class="footer-menu mb-4">
                            <div class="row justify-content-center">
                                <div class="col-lg-9 col-sm-10">
                                    <div class="footer-links">
                                        <div class="footer-links-box mt-5">
                                            <p class="footer-menu-head">
                                                QUICK LINKS
                                            </p>
                                            <ul class="footer-list">
                                                <li class="footer-item"><a href="#" class="footer-link">Home</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">about</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">Process</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">Contact us</a></li>
                                            </ul>
                                        </div>
                                        <div class="footer-links-box mt-5">
                                            <p class="footer-menu-head">
                                                Location
                                            </p>
                                            <ul class="footer-list">
                                                <li class="footer-item"><a href="#" class="footer-link">Surat</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">mumbai</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">new york</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">europe</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">hong kong</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">dubai</a></li>
                                            </ul>
                                        </div>
                                        <div class="footer-links-box mt-5">
                                            <p class="footer-menu-head">
                                                LEGAL
                                            </p>
                                            <ul class="footer-list">
                                                <li class="footer-item"><a href="#" class="footer-link">privacy statement</a>
                                                </li>
                                                <li class="footer-item"><a href="#" class="footer-link">Terms of use</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">cookie policy</a></li>
                                                <li class="footer-item"><a href="#" class="footer-link">Contact us</a></li>
                                            </ul>
                                        </div>
                                        <div class="footer-links-box mt-5">
                                            <p class="footer-menu-head">
                                                Connect with us :
                                            </p>
                                            <div class="footer-icon">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="social-icon icon icon-tabler icon-tabler-brand-facebook"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="social-icon icon icon-tabler icon-tabler-brand-instagram"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z">
                                                        </path>
                                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                        <path d="M16.5 7.5l0 .01"></path>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="social-icon icon icon-tabler icon-tabler-brand-youtube"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z">
                                                        </path>
                                                        <path d="M10 9l5 3l-5 3z"></path>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="social-icon icon icon-tabler icon-tabler-brand-linkedin"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                                        </path>
                                                        <path d="M8 11l0 5"></path>
                                                        <path d="M8 8l0 .01"></path>
                                                        <path d="M12 16l0 -5"></path>
                                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="social-icon icon icon-tabler icon-tabler-brand-twitter"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="footer-line"></div>
                        <div class="footer-bottom">
                            Copyright © 2023 BHANDERI <a href="https://blgdlab.com/">LAB GROWN DIAMONDS.</a> <br />
                            All Rights Reserved
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Project;