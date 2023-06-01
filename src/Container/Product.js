import React from "react";
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";
import "../style.css/style.css";
import face from "../imges/face.png";
import insta from "../imges/insta.png";
import youtube from "../imges/youtube.png";
import link from "../imges/link.png";
import twitter from "../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from "../imges/footerring.png";
import cmyk5 from "../imges/BLACK - CMYK 5.png";
import cmyk4 from "../imges/BLACK - CMYK 4.png";
import arrow2 from "../imges/arrow2.png";
import "../style.css/product.scss";
import Footer from "./footer/Footer";
// import "../style.css/style1.css";

function Product(props) {
  return (
    <div className="product-wrapper">
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

      <section class="product-hero container-fluid p-0">
        <div class="product-hero-box product-hero-img new-sec">
          <p class="product-heading">Raw To Refined</p>
          <p class="product-sub-heading">
            Brilliantly Bold To <br />
            Subtly Sublime
          </p>
        </div>
      </section>

      <section class="diamond container-fluid p-0">
        <div class="diamond-img-box diamond-img new-sec">
          {/* <img src={cmyk5} alt="" class="diamond-back" />
                    <img src={cmyk4} alt="" class="diamond-back2" />
                    <img src={cmyk4} alt="" class="diamond-back2" /> */}
          <div class="ll">
            <div class="diamond-text-box">
              <div class="diamond-heading">
                <img src={arrow2} alt="" class="diamond-arrow" />
                <p>
                  From <span>Lab</span> To <span>Luxury:</span> <br />
                  Explore The Fascinating <br />
                  World Of CVD Diamonds
                </p>
              </div>
              <p class="diamond-paregraph mt-4">
                Welcome to a revolutionary alternative to mined diamonds - lab
                grown diamonds produced through the Chemical Vapor Deposition
                process. These diamonds are an ethical and sustainable
                substitute for natural diamonds, with identical properties.
              </p>
              <p class="diamond-paregraph mt-4">
                We specialize in creating CVD diamonds that meet the highest
                industry standards. We use state-of-the-art technology to create
                diamonds that are free of impurities, have excellent color and
                clarity, and are available in a range of sizes, colors, and
                shapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="tab-view row flex-reverse">
          <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0">
            <div className="inner-rough">
              <h4>ROUGH LAB GROWN DIAMONDS</h4>
              <h5>Rough, Yet Refined: Diamonds That Sparkle With Intensity</h5>
              <p className="p-rough1">
                Rough lab grown diamonds fuse nature and science to create an
                ethical and eco-friendly masterpiece. Crafted with advanced
                technology, each diamond is unique and guilt-free.
              </p>
              <p className="p-rough2">
                By choosing rough diamonds, you not only showcase your
                individuality with a one-of-a-kind gemstone but also contribute
                to a sustainable and responsible future for the planet.
              </p>
            </div>
          </div>
          <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0">
            <div className="rough-right"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 col-sm-12 col-lg-6 col-md-6 col-12">
            <div className="rough-right1"></div>
          </div>
          <div className="col col-sm-12 col-lg-6 col-md-6 col-12">
            <div className="inner-rough1">
              <h4>POLISHED LAB GROWN DIAMONDS</h4>
              <h5>
                Crafted By Science, Polished By Art: Diamonds With Exceptional
                Brilliance
              </h5>
              <p className="p-rough1">
                Polished diamonds are the epitome of modern luxury with a
                perfect blend of technology and beauty, crafted to perfection by
                our master craftsmen.
              </p>
              <p className="p-rough2">
                When you choose polished diamonds, you're not just indulging in
                the ultimate luxury; you're also making a conscious choice for
                an ethical future for the planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
