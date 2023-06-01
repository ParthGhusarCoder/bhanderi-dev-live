import React from "react";
import Rectangle66 from "../../imges/Rectangle66.png";
import Rectangle67 from "../../imges/Rectangle67.png";
import Rectangle85 from "../../imges/Rectangle85.png";
import Rectangle94 from "../../imges/Rectangle94.png";
import Rectangle95 from "../../imges/Rectangle95.png";
import Rectangle96 from "../../imges/Rectangle96.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./BlogNews.scss";

const BlogNews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "myCustomCarousel",
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="blog-news-page">
      <div className="">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((_, ind) => (
            <div className="news-hero">
              <div className="container">
                <div className="news-wrapper">
                  <div className="hash-title">#{ind}.</div>
                  <div className="news-title">
                    Diamonds are forever. are lab grown diamond too ?
                  </div>
                  <div className="sub-news-title">
                    Some may call them manmade diamonds; others would prefer CVD
                    or man-made diamonds. The truth is lab grown diamonds have
                    as names as it has myths .........
                  </div>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="blog-news-title">News & Blog</div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div class="card">
              <img src={Rectangle66} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <div>
                    {" "}
                    THE CUT OR CLARITY FACTOR: WHICH MATTERS MOST FOR LAB GROWN
                    DIAMONDS?
                  </div>
                  <div className="date">April 07, 2023</div>
                </h5>
                <p class="card-text">
                  Among the 4 C's in a lab grown diamond - cut, color, clarity,
                  and carat, the cut of the stone plays a significant role in
                  determining its beaut
                </p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div class="card">
              <img src={Rectangle67} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <div>
                    REVOLUTION OF THE LAB GROWN DIAMOND IN MODERN TIMES!
                  </div>
                  <div className="date">April 07, 2023</div>
                </h5>
                <p class="card-text">
                  Shining like a diamond in this era is one of the biggest
                  revolutions. Lab grown diamond is a type of diamond produced
                  by the manufacturing method. A genuine diamond with the help
                  of a geological process gets extracted through mining.
                </p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div class="card">
              <img src={Rectangle85} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <div>
                    Go Environment Friendly With Surat’s Bhanderi Lab Grown
                    Sustainable Diamonds Which Have Set A Benchmark In The CVD
                    Diamond Industry
                  </div>
                  <div className="date">April 07, 2023</div>
                </h5>
                <p class="card-text">
                  Among the 4 C's in a lab grown diamond - cut, color, clarity,
                  and carat, the cut of the stone plays a significant role in
                  determining its beaut
                </p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div class="card">
              <img src={Rectangle94} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <div>
                    THE CUT OR CLARITY FACTOR: WHICH MATTERS MOST FOR LAB GROWN
                    DIAMONDS?
                  </div>
                  <div className="date">April 07, 2023</div>
                </h5>
                <p class="card-text">
                  Among the 4 C's in a lab grown diamond - cut, color, clarity,
                  and carat, the cut of the stone plays a significant role in
                  determining its beaut
                </p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div class="card">
              <img src={Rectangle95} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <div>
                    REVOLUTION OF THE LAB GROWN DIAMOND IN MODERN TIMES!
                  </div>
                  <div className="date">April 07, 2023</div>
                </h5>
                <p class="card-text">
                  Shining like a diamond in this era is one of the biggest
                  revolutions. Lab grown diamond is a type of diamond produced
                  by the manufacturing method. A genuine diamond with the help
                  of a geological process gets extracted through mining.
                </p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
            <div class="card">
              <img src={Rectangle96} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <div>
                    THE CUT OR CLARITY FACTOR: WHICH MATTERS MOST FOR LAB GROWN
                    DIAMONDS?
                  </div>
                  <div className="date">April 07, 2023</div>
                </h5>
                <p class="card-text">
                  Among the 4 C's in a lab grown diamond - cut, color, clarity,
                  and carat, the cut of the stone plays a significant role in
                  determining its beaut
                </p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
