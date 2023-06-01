import React from "react";
import purity from "../imges/purity.png";
import quality from "../imges/quality.png";
import promise from "../imges/promise.png";
import intant from "../imges/intant.png";
import "../style.css/about.scss";

function Aboutus(props) {
  return (
    <>
      <div className="container-fluid about-sec new-sec ">
        <div className="inner-tital">
          <h4>
            Better For Earth <br />
            <span>Better For You</span>
          </h4>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0">
            <div className="cralf-daimod"></div>
          </div>
          <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0 gap">
            <div className="col col-sm-12 col-lg-6 col-12 col-xl-6  p-0">
              <div className="inner-craf">
                <h4>Welcome To</h4>
                <p>Bhanderi Lab</p>
                <p> Grown Diamonds,</p>
              </div>
            </div>
            <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  p-0">
              <div className="craft-right">
                <p className="craft-right-first">
                  where beauty meets sustainability and ethics. Our story began
                  with a passion for diamonds and a deep commitment to creating
                  a better world.
                </p>
                <p className="craft-right-second mb-5">
                  We are a renowned company that specializes in creating Type
                  IIA lab grown diamonds using Chemical Vapor Deposition (CVD)
                  technology.
                </p>
                <button>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-6 col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  bg-green">
              <div className="left-inner-misson">
                <h4 className="mb-5">
                  OUR
                  <br />
                  <span>MISSION</span>
                </h4>
                <p>
                  The Value Of Bhanderi Is
                  <br /> Derived From Its
                </p>
              </div>

              {/* <div className="d-flex icons-wrapper">
                <div className="d-flex proriQuality">
                  <div className="text-white purity-sec">
                    <div>
                      <img src={purity} alt="purity" />
                    </div>
                    <h4>PURITY</h4>
                    <p>Ethical Diamonds That Are Real And Authentic</p>
                  </div>
                  <div className="text-white purity-sec innerprori">
                    <img src={quality} alt="quality" />
                    <h4>QUALITY</h4>
                    <p>Type IIA Diamond</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="d-flex icon-wrapper">
                <div className="d-flex proriQuality1">
                  <div className="text-white promise-sec">
                    <img src={promise} alt="promise" />
                    <h4>PROMISE</h4>
                    <p>
                      You Will Be Buying A Diamond Certified By GIA, IGI, GCAL
                      OR HRD
                    </p>
                  </div>
                  <div className="text-white promise-sec">
                    <img src={intant} alt="intant" />
                    <h4>INTENT</h4>
                    <p>Creating A Product By Simulating Nature</p>
                  </div>
                </div>
              </div> */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: "55px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "306px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img className="img" src={purity} alt="purity" />
                    </div>
                    <div>
                      <h4 className="mission-icon-heading">PURITY</h4>
                      <p className="mission-icon-content">
                        Ethical Diamonds That Are Real And Authentic
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      maxWidth: "306px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img className="img" src={quality} alt="quality" />
                    </div>
                    <div>
                      <h4 className="mission-icon-heading">QUALITY</h4>
                      <p className="mission-icon-content">Type IIA Diamond</p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: "55px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "306px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img className="img" src={promise} alt="promise" />
                    </div>
                    <div>
                      <h4 className="mission-icon-heading">PROMISE</h4>
                      <p className="mission-icon-content">
                        You Will Be Buying A Diamond Certified By GIA, IGI, GCAL
                        OR HRD
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      maxWidth: "306px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img className="img" src={intant} alt="intant" />
                    </div>
                    <div>
                      <h4 className="mission-icon-heading">INTENT</h4>
                      <p className="mission-icon-content">
                        Creating A Product By Simulating Nature
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col col-sm-12 col-lg-6 col-md-6 col-12 col-xl-6  mission-right">
              <div className="left-inner-misson1">
                <h4 className="mb-5">
                  OUR
                  <br />
                  <span>VISION</span>
                </h4>
                <p>Crafting The Future Of Lab-grown Diamonds.</p>
              </div>
              <div className="left-inner-pare">
                <div className="innerpare">
                  <p>
                    We Are A Renowned Company That Specializes In Creating Type
                    IIA Lab Grown Diamonds Using Chemical Vapor Deposition (CVD)
                    Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="impact-box new-sec">
          <div className="impact-text-box">
            <p className="heading-primary">
              {" "}
              <span>impact</span>{" "}
            </p>
            <p className="impact-text">
              Bhanderi is making an impact in the diamond industry by opening up
              new horizons, reducing the environmental impact and promoting
              ethical production. Our diamonds offer consumers a more
              cost-effective alternative to regular diamonds which can burn a
              hole in your pocket. Additionally, we support research and
              development in the field of diamond production to improve the
              quality and efficiency of the process. Overall, we are building a
              more{" "}
              <span style={{ color: "#024638" }}>
                {" "}
                sustainable, ethical, and accessible diamond industry.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "black" }}>
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
              <div className="skill1"></div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0 skill-box">
              <p className="skill-head  mb-4">
                The Bhanderi team is comprised of highly skilled engineers.
              </p>
              <p className="skill-paregraph  mb-4">
                The Bhanderi team is comprised of highly skilled engineers and
                diamond experts who are committed to producing high-quality
                diamonds in a socially responsible manner. At Bhanderi we value
                innovation, collaboration, and creativity, creating a work
                environment that fosters growth and learning.
              </p>
              <p className="skill-paregraph">
                We recognize the importance of work-life balance, offering
                flexible work arrangements and employee wellness programs.
                Additionally, the company is committed to supporting the local
                community and promoting sustainability through various
                initiatives. With a focus on environmental consciousness, social
                responsibility, and employee well-being, we are creating the
                epitome of a work culture that prioritizes both people and the
                planet.
              </p>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
              <div className="skill2"></div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-12 col-12 col-xl-3 p-0">
              <div className="skill3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
