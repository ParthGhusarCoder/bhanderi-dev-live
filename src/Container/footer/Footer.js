import React from "react";
import face from "../../imges/face.png";
import insta from "../../imges/insta.png";
import youtube from "../../imges/youtube.png";
import link from "../../imges/link.png";
import twitter from "../../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from "../../imges/footerring.png";
import { useNavigate } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="common-footer">
      <div className="footer-bg web-footer">
        <div className="container-fluid main-footer">
          <div className="row align-items-center">
            <div className="col col-lg-6 col-md-12 col-sm-12 p-5">
              <img
                src={footerring}
                alt="footerring"
                className="w-100 footer-ring"
              />
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12 p-0 footer-right">
              <h5 className="mb-5">
                <span>WE SEND REALLY</span>
                <br />
                GOOD EMAILS.
              </h5>

              <div className="d-flex main-input-box">
                <div className="input">
                  <input
                    className="from-control text-white"
                    placeholder="Enter Your Email Id To Subscribe"
                  />
                </div>
                <div className="footer-btn1 ms-3 btn btn">
                  <IoIosSend className="f-icon" />
                </div>
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
                  <li onClick={() => navigate("/")}>
                    <a href="#">Home</a>
                  </li>
                  <li onClick={() => navigate("/about")}>
                    <a href="#">About</a>
                  </li>
                  <li onClick={() => navigate("/revolutionary")}>
                    <a href="#">Process</a>
                  </li>
                  <li onClick={() => navigate("/contact")}>
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
                  <img src={face} alt="face" />
                  <img src={insta} alt="insta" />
                  <img src={youtube} alt="youtube" />
                  <img src={link} alt="link" />
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="d-flex"></div>
              </div>
            </div>
            <p className="copy-right m-0 text-center">
              Copyright © 2023 Bhanderi Lab Grown Diamonds. All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bg mobile-footer">
        <div className="container-fluid main-footer">
          <div className="row align-items-center">
            <div className="col col-lg-6 col-md-12 col-sm-12 p-5 ring-wrapper">
              <img
                src={footerring}
                alt="footerring"
                className="w-100 footer-ring"
              />
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12 p-0 footer-right">
              <h5 className="mb-5">
                <span>WE SEND REALLY</span>
                GOOD EMAILS.
              </h5>

              <div className="d-flex main-input-box">
                <div className="input">
                  <input
                    className="from-control text-white"
                    placeholder="Enter Your Email Id To Subscribe"
                  />
                </div>
                <div className="footer-btn1 btn btn">
                  <IoIosSend className="f-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="container container-md container-lg container-sm">
            <div className="row inner-footer">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
                style={{ marginBottom: "70px" }}
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style={{
                        background: "black",
                        color: "white",
                        borderBottom: "1px solid #292929",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <p>QUICK LINKS</p>
                        <span></span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ background: "black", borderRadius: 0 }}
                    >
                      <ul className="footer-li">
                        <li onClick={() => navigate("/")}>
                          <a href="#">Home</a>
                        </li>
                        <li onClick={() => navigate("/about")}>
                          <a href="#">About</a>
                        </li>
                        <li onClick={() => navigate("/revolutionary")}>
                          <a href="#">Process</a>
                        </li>
                        <li onClick={() => navigate("/contact")}>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                      style={{
                        background: "black",
                        color: "white",
                        borderBottom: "1px solid #292929",
                      }}
                    >
                      LOCATION
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ background: "black", borderRadius: 0 }}
                    >
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
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                      style={{
                        background: "black",
                        color: "white",
                        borderBottom: "1px solid #292929",
                      }}
                    >
                      LEGAL
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ background: "black", borderRadius: 0 }}
                    >
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
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                      style={{
                        background: "black",
                        color: "white",
                        borderBottom: "1px solid #292929",
                      }}
                    >
                      CONNECT WITH US :
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ background: "black", borderRadius: 0 }}
                    >
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
                  </div>
                </div>
              </div>
            </div>
            <p
              style={{
                color: "white",
                padding: "25px 80px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Copyright © 2023 Bhanderi Lab Grown Diamonds. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
