import React from "react";
import infa from "../../imges/infa.png";
import crtifi1 from "../../imges/crtifi1.png";
import crtifi2 from "../../imges/crtifi2.png";
import "./Process.scss";

function Proces(props) {
  return (
    <>
      <div className="process-page">
        <div className="main-process">
          <div className="container">
            <div className="daimond">
              <h2>A REVOLUTIONARY</h2>
              <span>ARCHETYPE</span>
            </div>
          </div>
        </div>
        <section className="div-wrapper water-wrapper">
          <div className="container-fluid">
            <div className="proccess-wrapper row">
              <div className="left-side-wrapper col-md-6 ">
                <p>
                  <span>No </span>
                  Water Wasted
                </p>
              </div>
              <div className="right-side-wrapper col-md-6">
                <p>
                  Our advanced technology ensures that every drop of water used
                  in our manufacturing process is recycled, minimizing waste and
                  preserving precious resources. We take great pride in our
                  environmentally conscious approach to creating beautiful
                  diamonds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="div-wrapper polluting-wrapper">
          <div className="container-fluid">
            <div className="proccess-wrapper row">
              <div className="left-side-wrapper col-md-6 ">
                <p>
                  <span>No </span>
                  polluting energy
                </p>
              </div>
              <div className="right-side-wrapper col-md-6">
                <p>
                  We are proud to use renewable energy resources to power our
                  manufacturing process, resulting in gems that use only 50% of
                  the energy of mined diamonds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="div-wrapper earth-wrapper">
          <div className="container-fluid">
            <div className="proccess-wrapper row">
              <div className="left-side-wrapper col-md-6 ">
                <p>
                  <span>No </span>
                  earth uprooted
                </p>
              </div>
              <div className="right-side-wrapper col-md-6">
                <p>
                  We are committed to responsible energy efficient diamond
                  production that doesn't involve any uprooting, land
                  disturbance, or excavation that can cause irreversible damage
                  to the earth's surface.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="div-wrapper toxic-wrapper">
          <div className="container-fluid">
            <div className="proccess-wrapper row">
              <div className="left-side-wrapper col-md-6 ">
                <p>
                  <span>No </span>
                  toxic air
                </p>
              </div>
              <div className="right-side-wrapper col-md-6">
                <p>
                  Our commitment to sustainability extends to the air we
                  breathe, which is why we use only clean energy sources in our
                  production process resulting in cleaner air for a healthier
                  planet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="div-wrapper conflict-wrapper">
          <div className="container-fluid">
            <div className="proccess-wrapper row">
              <div className="left-side-wrapper col-md-6 ">
                <p>
                  <span>No </span>
                  conflict
                </p>
              </div>
              <div className="right-side-wrapper col-md-6">
                <p>
                  We are proud to offer 100% conflict-free diamonds that are
                  ethically grown in our state-of-the-art facilities and we make
                  responsible choices that prioritize the well-being of life on
                  our planet
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="div-wrapper destructive-wrapper">
          <div className="container-fluid">
            <div className="proccess-wrapper row">
              <div className="left-side-wrapper col-md-6 ">
                <p>
                  <span>No </span>
                  destructive Production
                </p>
              </div>
              <div className="right-side-wrapper col-md-6">
                <p>
                  We are dedicated to preventing the use of child labor,
                  hazardous working conditions, or environmental degradation in
                  the production of our diamonds. You can be assured that your
                  purchase promotes moral principles and contributes to a better
                  future.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <main>
                    <div className='slider'>
                        <Parallax strength={100} bgImage={water} className='content1 h-100'>

                            <div className='container water-container'>
                                <div className='text-white'>
                                    <div className='d-flex justify-content-between inner-text'>
                                        <div className='water-title'>
                                            <h4 className='nowater'>NO<span className='inner-water-text ms-3'>WATER WASTED</span></h4>
                                        </div>
                                        <div className='water-right'>
                                            <p>Our Advanced Technology Ensures That Every Drop Of Water Used In Our Manufacturing Process Is Recycled, Minimizing Waste And Preserving Precious Resources. We Take Great Pride In Our Environmentally Conscious Approach To Creating Beautiful Diamonds.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Parallax>
                        <Parallax strength={100} bgImage={energy} className='enery1 '>
                            <div className='container'>
                                <div className='text-white content2'>
                                    <div className='d-flex justify-content-between inner-text'>
                                        <div className='water-title'>
                                            <h4>NO<span className='inner-water-text ms-3'>POLLUTING ENERGY</span></h4>
                                        </div>
                                        <div className='water-right'>
                                            <p>We Are Proud To Use Renewable Energy Resources To Power Our Manufacturing Process, Resulting In Gems That Use Only 50% Of The Energy Of Mined Diamonds.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>

                        <Parallax strength={100} bgImage={earth} className='earth1'>
                            <div className='container'>
                                <div className='text-white content3'>
                                    <div className='d-flex justify-content-between inner-text'>
                                        <div className='water-title earth-title'>
                                            <h4>NO<span className='inner-water-text ms-3'>EARTH UPROOTED</span></h4>
                                        </div>
                                        <div className='water-right earth-right'>
                                            <p>We Are Committed To Responsible Energy Efficient Diamond Production That Doesn't Involve Any Uprooting, Land Disturbance, Or Excavation That Can Cause Irreversible Damage To The Earth's Surface.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>

                        <Parallax strength={100} bgImage={air} className='air1'>
                            <div className='container content1'>
                                <div className='text-white content4'>
                                    <div className='d-flex justify-content-between inner-text'>
                                        <div className='water-title toxic-air'>
                                            <h4>NO<span className='inner-water-text ms-3'>TOXIC AIR</span></h4>
                                        </div>
                                        <div className='water-right toxic-right'>
                                            <p>Our Commitment To Sustainability Extends To The Air We Breathe, Which Is Why We Use Only Clean Energy Sources In Our Production Process Resulting In Cleaner Air For A Healthier Planet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>

                        <Parallax strength={100} bgImage={conflict} >
                            <div className='container content2 content22'>
                                <div className='text-white'>
                                    <div className='d-flex justify-content-between inner-text inner-conflict'>
                                        <div className='water-title conflict-title'>
                                            <h4>NO<span className='inner-water-text ms-3'>CONFLICT</span></h4>
                                        </div>
                                        <div className='water-right conflict-right'>
                                            <p>We Are Proud To Offer 100% Conflict-free Diamonds That Are Ethically Grown In Our State-of-the-art Facilities And We Make Responsible Choices That Prioritize The Well-being Of Life On Our Planet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>

                        <Parallax strength={100} bgImage={lend} className='slide-image'>
                            <div className='container'>
                                <div className='text-white'>
                                    <div className='d-flex justify-content-between inner-text content33'>
                                        <div className='water-title lend-title'>
                                            <h4>NO<span className='inner-water-text ms-3'>DESTRUCTIVE PRODUCTION</span></h4>
                                        </div>
                                        <div className='water-right lend-right'>
                                            <p>We Are Dedicated To Preventing The Use Of Child Labor, Hazardous Working Conditions, Or Environmental Degradation In The Production Of Our Diamonds. You Can Be Assured That Your Purchase Promotes Moral Principles And Contributes To A Better Future.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </main> */}

        <div className="main-infa">
          <div className="container-fluid">
            <div className="row align-items-end">
              <div className="col col-sm-12 col-lg-6 col-md-6 col-12 p-0 infa-left">
                <img src={infa} alt="infa" className="p-0 w-100" />
              </div>
              <div className="col col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="infa-right">
                  <h5>OUR </h5>
                  <h5>Infrastructure</h5>
                  <div>
                    Smart Infrastructure where technology meets ethical luxury.
                  </div>
                  <p className="infa-inner">
                    Diamonds for the modern era, grown in a lab with love for
                    the planet and people.
                  </p>
                  <p className="infa-inner">
                    Bhanderi produces top-notch lab-grown diamonds with the
                    cutting-edge infrastructure. For optimal effectiveness and
                    precision, our state-of-the-art facilities employ the best
                    technology and machinery. We uphold strict quality and
                    consistency requirements throughout the whole manufacturing
                    cycle, from seed to final grading. Our elaborate and thought
                    through infrastructure is a testament for innovation and
                    perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row inner-certi align-items-center">
            <div className="col col-sm-12 col-lg-6 col-md-6 col-12  main-certifi">
              <h5>Certifications</h5>
              <p className="certifi2">
                At Bhanderi, No Stone Is Left Unchecked In Terms Of Quality
                Assurance. The Certification Ensures Diamond's Purity, Origin,
                And Market Value. Our Commitment To Quality And Sustainability
                Is Demonstrated By The Rigorous Examination And Certification
                Process.
              </p>
              <p className="certifi2 mt-0">
                At Bhanderi, No Stone Is Left Unchecked In Terms Of Quality
                Assurance. The Certification Ensures Diamond's Purity, Origin,
                And Market Value. Our Commitment To Quality And Sustainability
                Is Demonstrated By The Rigorous Examination And Certification
                Process.
              </p>
              <p className="certifi1">
                <span>CERTIFICATES</span> - GIA, IGI, GCAL OR HRD
              </p>
            </div>
            <div className="col col-sm-12 col-lg-6 col-md-6 col-12 ">
              <div className="carti-right text-center">
                <img src={crtifi1} alt="crtifi1" className="" />
                <img src={crtifi2} alt="crtifi2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proces;
