import React from "react";
import arrow2 from "../../imges/arrow2.png";
import "./product.scss";

function Product(props) {
  return (
    <>
      <div className="product-page">
        <section class="product-hero container-fluid p-0">
          <div class="product-hero-box product-hero-img new-sec">
            <p class="product-heading">
              Raw <span>To </span>Refined
            </p>
            <p class="product-sub-heading">
              Brilliantly Bold To <br />
              Subtly Sublime
            </p>
          </div>
        </section>

        <section class="diamond container-fluid p-0">
          <div class="diamond-img-box diamond-img new-sec">
            <div class="ll">
              <div class="diamond-text-box">
                <div class="diamond-heading">
                  <img src={arrow2} alt="" class="diamond-arrow" />
                  <p>
                    From <span>Lab</span> to <span>Luxury:</span> <br />
                    Explore The Fascinating <br />
                    World of CVD Diamonds
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
                  industry standards. We use state-of-the-art technology to
                  create diamonds that are free of impurities, have excellent
                  color and clarity, and are available in a range of sizes,
                  colors, and shapes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid">
          <div className="row flex-column-reverse flex-md-row ">
            <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0">
              <div className="inner-rough">
                <h4>Rough Lab Grown Diamonds</h4>
                <h5>
                  Rough, Yet Refined: Diamonds That Sparkle With Intensity
                </h5>
                <p className="p-rough1">
                  Rough lab grown diamonds fuse nature and science to create an
                  ethical and eco-friendly masterpiece. Crafted with advanced
                  technology, each diamond is unique and guilt-free.
                </p>
                <p className="p-rough2">
                  By choosing rough diamonds, you not only showcase your
                  individuality with a one-of-a-kind gemstone but also
                  contribute to a sustainable and responsible future for the
                  planet.
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
                <h4>Polished Lab Grown Diamonds</h4>
                <h5>
                  Crafted By Science, Polished By Art: Diamonds With Exceptional
                  Brilliance
                </h5>
                <p className="p-rough1">
                  Polished diamonds are the epitome of modern luxury with a
                  perfect blend of technology and beauty, crafted to perfection
                  by our master craftsmen.
                </p>
                <p className="p-rough2">
                  When you choose polished diamonds, you're not just indulging
                  in the ultimate luxury; you're also making a conscious choice
                  for an ethical future for the planet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row flex-column-reverse flex-md-row ">
            <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0">
              <div className="inner-rough">
                <h4>Type IIA Diamonds</h4>

                <p className="p-rough1">
                  Type IIA diamonds are renowned for their exceptional beauty,
                  brilliance, and rarity. In fact, they represent less than 2%
                  of all diamonds mined or created. These diamonds are
                  completely free of nitrogen impurities, making them the most
                  chemically pure diamonds in existence.
                </p>
                <p className="p-rough2">
                  Type IIA diamonds are renowned for their exceptional beauty,
                  brilliance, and rarity. In fact, they represent less than 2%
                  of all diamonds mined or created. These diamonds are
                  completely free of nitrogen impurities, making them the most
                  chemically pure diamonds in existence.
                </p>
                <h5>
                  Visit us today to experience the unparalleled beauty of Type
                  IIA diamonds!
                </h5>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0">
              <div className="rough-right iia-right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
