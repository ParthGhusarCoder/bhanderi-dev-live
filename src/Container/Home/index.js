import React from "react";
import { Col, Row } from "reactstrap";

import Ring from "../../imges/Ring.png";
import TRADERS from "../../imges/TRADERS.png";
import JAWELS from "../../imges/Mask group.png";
import Rectangle33 from "../../imges/Rectangle33.jpg";
import Vertical from "../../imges/Vertical Display Units H2 1.png";
import Italy from "../../imges/Italy.png";
import Mumbai from "../../imges/Mumbai.png";

import "./style.scss";
import Slider from "react-slick";

const eventData = [
  {
    title: "JCK Show, The Venetian, Las Vegas",
    date: "2",
    month: "JUN",
    image: Vertical,
    description:
      "Experience the industry’s largest and most renowned jewelry trade event in the world – The JCK 2023. Indulge in a truly exceptional encounter with the finest lab grown diamonds available at Bhanderi, epitomizing excellence in craftsmanship and quality. ",
  },
  {
    title: "IIJS Premiere Show, Mumbai",
    date: "3",
    month: "AUG",
    image: Mumbai,
    description:
      "Discover the grandeur of the prestigious IIJS Premiere Show 2023 to be held in Mumbai. Immerse yourself in a captivating display of extraordinary artistry and unrivaled beauty, as Bhanderi will present an exquisite collection of lab grown diamonds.",
  },
  {
    title: "Vincenzaro Show, Italy",
    date: "8",
    month: "SEP",
    image: Italy,
    description:
      "Brace yourself for an unforgettable experience at Vincenzaro Show 2023 in Italy where Bhanderi will present their finest lab grown diamonds collection that exude luxury and timeless elegance.",
  },
];

const Home = () => {
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
    <div className="home-page">
      <div className="hero-sec-1">
        <div className="container-wrapper">
          <div className="text-wrapper">
            <p className="title-text">Responsibly</p>
            <p className="subtitle-text">Grown, Beautifully Crafted.</p>
          </div>
        </div>
      </div>
      <div className="hero-sec-2">
        <div className="container-wrapper">
          <div className="text-wrapper">
            <p className="title-text">6000 +</p>
            <p className="bolder-text">CVD Reactors.</p>
            <p className="subtitle-text">
              Diamonds made with state-of-the-art CVD technology.
            </p>
            <p className="desc-text">
              Leading the way to a brighter, more sustainable future{" "}
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
      <div className="hero-sec-3">
        <div className="container-wrapper">
          <div className="text-wrapper">
            <p className="title-text">4 +</p>
            <p className="subtitle-text">Dedicated R&D Labs.</p>
            <p className="rnd-text">
              Where diamonds come to life, in our R&D Lab.
            </p>
            <p className="desc-text">
              Shaping the future of diamonds while pushing the boundaries of
              quality{" "}
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
      <div className="hero-sec-4">
        <div className="container-wrapper">
          <div className="text-wrapper">
            <p className="title-text">2 million +</p>
            <p className="bolder-text">diamond polishing capacity</p>
            <p className="subtitle-text">Carving brilliance with precision.</p>
            <p className="desc-text">
              With High-tech facilities and experts, bringing brilliance to life{" "}
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
      <div className="hero-sec-5">
        <div className="">
          <div className="text-wrapper d-flex">
            <div className="mobile-type-text">type IIA</div>
            <div className="mobile-diamonds-text">Diamonds</div>
            <div className="crafted-diamond-img">
              <img src={Ring} className="w-100 h-100" alt="diamond ring" />
            </div>
            <div className="crafted-diamond-details">
              <div className="type-text">type IIA</div>
              <div className="diamonds-text">Diamonds</div>
              <p className="desc-text">
                Type IIA a are a highly coveted type of diamond known for its
                purity and beauty as they are made up of 100% carbon atoms with
                no measurable nitrogen or boron impurities.
              </p>
              <p className="desc-text">
                At Bhanderi, we are proud to offer you the opportunity to own
                one of the rarest and most sought-after gems in the world - the
                Type IIA diamond.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-sec-6">
        <div className="container-wrapper">
          <div className="text-wrapper">
            <div className="main-title">our network partners</div>
            <div className="network-partner-wrapper">
              <div className="audience-wrapper">
                <div className="title">TRADERS</div>
                <div className="wrapper">
                  <img src={TRADERS} alt="traders" />
                  <div className="desc-btn">
                    <div className="title">TRADERS</div>
                    <p className="audience-desc">
                      A perfect size for everyone,with our vast inventory.
                    </p>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="audience-wrapper">
                <div className="title">JEWELRS</div>
                <div className="wrapper">
                  <img src={JAWELS} alt="JEWELRS" />
                  <div className="desc-btn">
                    <div className="title">JEWELRS</div>
                    <p className="audience-desc">
                      Infinite possibilities, in our veritable treasure trove of
                      diamonds
                    </p>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section">
        <div class="marquee">
          <div class="track">
            <div class="marque-text">
              Make in India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
            </div>
          </div>
        </div>
        {/* <marquee className="marque-text" loop="2">
          Make in India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Make in India
        </marquee> */}
      </div>
      <div className="hero-sec-7">
        <div className="">
          <div className="text-wrapper">
            <div className="benefits-lab-grow-dia">
              <div className="benefits-lab-grow-dia-detail">
                <div>
                  <div className="benifit-text-wrapper">
                    <p className="benifit">
                      Unmatched Benefits <br /> Of{" "}
                      <span className="benifit-span mb-5">
                        Lab Grown <br />
                        Diamonds
                      </span>
                    </p>
                  </div>
                  <p className="benifit-p my-5">
                    Uncover reasons to choose Lab Grown Diamonds:
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
              </div>
              <div className="benefits-lab-grow-dia-img">
                <img src={Rectangle33} alt="diamond rec" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-sec-8 mobile-event-wrapper">
        <div className="container-wrapper">
          <p className="type-diamond" style={{ textAlign: "center" }}>
            UPCOMING<span className="ms-2">EVENT</span>
          </p>
          <Slider {...settings}>
            {eventData.map((data, ind) => (
              <div className="upcoming-item mb-3">
                <div className="event-img">
                  <img src={data.image} alt="event 1" />
                  <div className="event-date">
                    {data.date}
                    <p>{data.month}</p>
                  </div>
                </div>
                <div className="event-discription">
                  <h1>{data.title}</h1>
                  <h3>{data.description}</h3>
                  {/* <p>BOOTH #3109</p> */}
                </div>
              </div>
            ))}
          </Slider>
          <div className="upcoming-event-wrapper"></div>
        </div>
      </div>

      <div className="hero-sec-8 web-ebent-wrapper">
        <div className="container-wrapper">
          <p className="type-diamond" style={{ textAlign: "center" }}>
            UPCOMING<span className="ms-2">EVENT</span>
          </p>
          <Row className="m-0">
            {eventData.map((data, ind) => (
              <Col md={4} className="m-0">
                <div className="upcoming-item mb-3">
                  <div className="event-img">
                    <img src={data.image} alt="event 1" />
                    <div className="event-date">
                      {data.date}
                      <p>{data.month}</p>
                    </div>
                  </div>
                  <div className="event-discription">
                    <h1>{data.title}</h1>
                    <h3>{data.description}</h3>
                    {/* <p>BOOTH #3109</p> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {/* // <Col md={4} className="m-0">
            //   <div className="upcoming-item mb-3">
            //     <div className="event-img">
            //       <img src={Vertical} alt="event 2" />
            //       <div className="event-date">
            //         25
            //         <p>JUN</p>
            //       </div>
            //     </div>
            //     <div className="event-discription">
            //       <h1>THE #1 JEWELRY TRADE SHOWIN THE WORLD</h1>
            //       <h3>Ethically Crafted Diamonds</h3>
            //       <p>BOOTH #3109</p>
            //     </div>
            //   </div>
            // </Col>
            // <Col md={4} className="m-0">
            //   <div className="upcoming-item mb-3">
            //     <div className="event-img">
            //       <img src={Vertical} alt="event 3" />
            //       <div className="event-date">
            //         25
            //         <p>JUN</p>
            //       </div>
            //     </div>
            //     <div className="event-discription">
            //       <h1>THE #1 JEWELRY TRADE SHOWIN THE WORLD</h1>
            //       <h3>Ethically Crafted Diamonds</h3>
            //       <p>BOOTH #3109</p>
            //     </div>
            //   </div>
            // </Col>
          // </Row> */}
          <div className="upcoming-event-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
