import React from "react";
import "../style.css/contact.scss";

const faqData = [
  {
    title: "What exactly are lab grown diamonds?",
    body: "Lab grown diamonds, also known as cultured diamonds are crafted using advanced technology in a controlled laboratory environment. These diamonds have the same physical, chemical, and optical properties as natural diamonds, but are made in a shorter period of time and at a lower cost.",
  },
  {
    title: "What are CVD diamonds and how are they created in a lab?",
    body: "Chemical vapor deposition is one of the processes used to create lab grown diamonds. CVD diamonds are created using a process where a mixture of gases is heated to high temperatures, causing carbon atoms to crystallize and form diamond layers. This controlled process allows for precise control over the diamond's growth, resulting in high-quality diamonds with consistent characteristics.",
  },
  {
    title: "What sets lab grown diamonds apart from mined diamonds?",
    body: "Lab grown diamonds are created in controlled laboratory environments using advanced technology, while natural diamonds are formed naturally in the earth's crust over millions of years. Lab-grown diamonds are typically more affordable, sustainable, and ethical, as they do not require any mining and have a lower environmental impact. However, both lab grown and natural diamonds share the same physical, chemical, and optical properties, and are equally hard and durable.",
  },
  {
    title: "How can one determine if a diamond is a CVD diamond?",
    body: 'Identifying CVD diamonds can be done by examining their unique strain pattern, strong red fluorescence, and absence of the "Cape Line" at 415 nm on their absorption spectrum. Instead, they exhibit a noticeable line at 737 nm, which can be detected through specialized gemological testing techniques.',
  },
  {
    title:
      "Can CVD diamonds pass standard diamond testers used for natural diamonds?",
    body: "Unlike diamond simulants like CZ or Moissanite, lab-created diamonds, including CVD diamonds, will typically test positive on standard diamond testers due to their similar properties to natural diamonds.",
  },
  {
    title:
      "What is the typical duration for creating a diamond in a laboratory?",
    body: "The time required to create a diamond in a laboratory depends on the color and size, typically ranging from 60-120 days. Using the CVD process, carbon atoms attach to the seed diamond layer gradually, resulting in a genuine diamond. However, the growth rate is slow, usually around 0.1-10 microns per hour for larger surfaces. As an estimate, it takes approximately a month to grow a 1-carat CVD diamond.",
  },
  {
    title: "What makes CVD diamonds distinct or special?",
    body: "CVD diamonds are flawless, conflict-free, and of high quality due to their controlled lab production. They are also a more cost-effective option, offering savings compared to natural diamonds.",
  },
  {
    title: "Are lab-grown diamonds as durable as natural diamonds?",
    body: "Lab-grown diamonds have comparable strength and hardness to natural diamonds, with both scoring a perfect 10 on the Mohs scale.",
  },
  {
    title: "How long can lab grown diamonds be expected to last?",
    body: "Lab grown diamonds are on par with natural diamonds in terms of durability, chemical composition, optical properties, thermal stability, and visual appearance. They are virtually indistinguishable and are expected to maintain their shine and brilliance indefinitely, making them a long-lasting choice.",
  },
  {
    title: "Can lab-grown diamonds be insured like natural diamonds?",
    body: "Certainly! Lab-grown diamonds can be insured, just like natural diamonds. In fact, opting for a lab-grown diamond can not only save you money on the diamond itself but also on the annual insurance premium, as the lower overall cost of the lab-grown diamond can result in lower insurance costs. ",
  },
  {
    title: "Does lab grown diamonds have resale value?",
    body: "Lab-grown diamonds offer a lifetime exchange policy and a buyback option at 80% of the prevailing rate, providing flexibility for future transactions. ",
  },
  {
    title:
      "Do BLGD lab grown diamonds come with unique inscriptions for easy identification?",
    body: "Certainly! Each BLGD lab grown diamond is laser inscribed with a unique ID, which is also documented in the accompanying certificate for easy identification and verification with the assistance of a jeweler. ",
  },
  {
    title:
      "Are there diverse options for shapes and sizes in BLGD lab grown diamonds?",
    body: "Certainly yes! BLGD offers a wide selection of lab grown diamonds in various patented and traditional shapes, including round, cushion, princess, ovals, pear, marquise, emerald, and more. ",
  },
  {
    title: "Are BLGD-created lab grown diamonds available worldwide?",
    body: "BLGD lab grown diamonds are available worldwide, with distribution links across continents including North America, Europe, Asia, Australia, and Africa. This allows BLGD to cater to a diverse global audience, creating jewelry and inciting demand for lab grown diamonds in various regions. ",
  },
];

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <section className="contact">
        <p className="contact-heading ">Contact us</p>
        <div className="contact-line"></div>
        <form className="row g-3 ">
          <div className="col-md-12 mt4">
            <label for="inputState" className="form-label contact-lable">
              how we can help ?
            </label>
            <select id="inputState" className="form-select contact-input">
              <option selected></option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-6 mt4">
            <label for="inputAddress" className="form-label contact-lable">
              First name
            </label>
            <input
              type="text"
              className="form-control contact-input"
              id="inputAddress"
            />
          </div>
          <div className="col-md-6 mt4">
            <label for="inputAddress" className="form-label contact-lable">
              last name
            </label>
            <input
              type="text"
              className="form-control contact-input"
              id="inputAddress"
            />
          </div>
          <div className="col-md-12 mt4">
            <label for="inputEmail4" className="form-label contact-lable">
              Email
            </label>
            <input
              type="email"
              className="form-control contact-input"
              id="inputEmail4"
            />
          </div>
          <div className="col-12 mt4">
            <label
              for="exampleFormControlTextarea1"
              className="form-label contact-lable"
            >
              message
            </label>
            <textarea
              className="form-control text-area"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div className="col-12">
            <div className="btn-box">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label chk-text" for="gridCheck">
                  By submitting, you confirm you have read and accept our
                  privacy policy.
                </label>
              </div>
              <div className="submit-btn">
                {/* <a href="#" className="btn1 btn-submit ">
                  Submit
                </a> */}
                SUBMIT
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="message">
        <div className="message-main-box">
          <p className="contact-heading contact-mobile-heading text-white">
            Or send us a message
          </p>
          <div className="message-us mt-5 contact-web-heading">
            <p className="contact-heading text-white">Or send us a message</p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="btn-web-appointment">book appointment</div>
            </div>
          </div>
          <div className="message-line"></div>

          <div className="message-box">
            <div className="message-us mt-5">
              <p className="message-head">Call us :</p>
              <p>
                <a href="tel:+91 85003 85003" className="message-num">
                  +91 85003 85003
                </a>
              </p>
            </div>
            <div className="message-us mt-5">
              <p className="message-head">Email us at :</p>
              <p>
                <a href="mailto:info@blgdlab.com" className="message-text">
                  info@blgdlab.com
                </a>
              </p>
            </div>
            <div className="message-us mt-5">
              <p className="message-head">Write to us :</p>
              <p className="message-text">
                4TH FLOOR, AKSHAR BUILDING, <br /> SURAT - 395004 GUJARAT,{" "}
                <br /> INDIA
              </p>
            </div>
            <div className="message-us mt-5">
              <p className="message-head">Media inquiries :</p>
              <p className="message-text">cONATCT US : INFO@BLGDLAB.COM</p>
              <p className="message-text">vISIT OUR : NEWSROOM.</p>
            </div>
            <div className="message-us btn-mobile-appointment mt-5">
              <div>book appointment</div>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <p className="contact-heading">LOCATE US IN MAP</p>

        <div className="map-wrapper">
          <div className="map-img-container"></div>
        </div>

        <div className="tabs_wrapper">
          <ul className="tabs">
            <li rel="tab1">H.O.</li>
            <li rel="tab2">MUMBAI</li>
            <li rel="tab3">NEW YORK</li>
            <li rel="tab4">EUROPE</li>
            <li rel="tab5">HONG KONG</li>
            <li rel="tab6">DUBAI</li>
          </ul>

          <div className="web-map-wrapper">
            <div className="map-web-img-container"></div>
          </div>
        </div>
      </section>

      <section className="faq">
        <p className="contact-heading">FAQ</p>
        <div style={{ marginBottom: "50px" }}>
          Welcome to our FAQ section! Here, we have compiled answers to commonly
          asked questions about our lab grown diamonds. From their creation
          process to their quality, we are here to provide you with the
          information you may need while making an informed decision.{" "}
        </div>
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          style={{ marginBottom: "70px" }}
        >
          {faqData.map((data, index) => (
            <div className="accordion-item">
              <h2 className="accordion-header" id={`title-${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls={index}
                >
                  <div>
                    <p>{data.title}</p>
                    <span></span>
                  </div>
                </button>
              </h2>
              <div
                id={index}
                className="accordion-collapse collapse"
                aria-labelledby={`title-${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{data.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
