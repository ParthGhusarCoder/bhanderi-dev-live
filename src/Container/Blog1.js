import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import firstblog from "../imges/firstBlog.jpg";
import secondblog from "../imges/firstBlog.jpg";
import thirdblog from "../imges/firstBlog.jpg";
import fourblog from "../imges/firstBlog.jpg";
import fiveblog from "../imges/firstBlog.jpg";
import face from "../imges/face.png";
import insta from "../imges/insta.png";
import youtube from "../imges/youtube.png";
import link from "../imges/link.png";
import twitter from "../imges/twitter.png";
import { IoIosSend } from "react-icons/io";
import footerring from "../imges/footerring.png";
import "../style.css/Blog.css";
import Logo from "../imges/logo.png";
import Menu from "../imges/Frame.png";

function Blog(props) {
  return (
    <>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to={0} className="active" />
          <li data-target="#carousel" data-slide-to={1} />
          <li data-target="#carousel" data-slide-to={2} />
          <li data-target="#carousel" data-slide-to={3} />
          <li data-target="#carousel" data-slide-to={4} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div
            className="carousel-item active"
            style={{
              backgroundImage:
                'url("https://blgdlab.com/assets/images/blog-detail/Complete-Guide-To-Lab-Grown-Diamonds.jpg")',
              backgroundSize: "cover",
              width: "100%",
              height: "height: 63vh;",
            }}
          >
            <div className="caption">
              <div className="firstBlog">
                <div>#1.</div>
                <h1>Diamonds are forever. are lab grown diamond too ?</h1>
                <p>
                  Some may call them manmade diamonds; others would prefer CVD
                  or man-made diamonds. The truth is lab grown diamonds have as
                  names as it has myths .........
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                'url("https://blgdlab.com/assets/images/blog-detail/The-4-Of-Diamonds-landing.jpg")',
              backgroundSize: "cover",
              width: "100%",
              height: "height: 63vh;",
            }}
          >
            <div className="caption">
              <div className="firstBlog text-white">
                <div>#2.</div>
                <h1 className="text-white">
                  Diamonds are forever. are lab grown diamond too ?
                </h1>
                <p>
                  Some may call them manmade diamonds; others would prefer CVD
                  or man-made diamonds. The truth is lab grown diamonds have as
                  names as it has myths .........
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                'url("https://blgdlab.com/assets/images/blog-detail/A-Dream-to-Reality-Lab-Created-Diamonds.jpg")',
              backgroundSize: "cover",
              width: "100%",
              height: "height: 63vh;",
            }}
          >
            <div className="caption">
              <div className="firstBlog text-white">
                <div>#3.</div>
                <h1 className="text-white">
                  Diamonds are forever. are lab grown diamond too ?
                </h1>
                <p>
                  Some may call them manmade diamonds; others would prefer CVD
                  or man-made diamonds. The truth is lab grown diamonds have as
                  names as it has myths .........
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                'url("https://blgdlab.com/assets/images/blog-detail/How-Are-Lab-Grown-Diamonds-Made_Banner_Desktop.jpg")',
              backgroundSize: "cover",
              width: "100%",
              height: "height: 63vh;",
            }}
          >
            <div className="caption">
              <div className="firstBlog text-white">
                <div>#4.</div>
                <h1 className="text-white">
                  Diamonds are forever. are lab grown diamond too ?
                </h1>
                <p>
                  Some may call them manmade diamonds; others would prefer CVD
                  or man-made diamonds. The truth is lab grown diamonds have as
                  names as it has myths .........
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                'url("https://blgdlab.com/assets/images/blog-detail/The-Best-Manufacturer-And-Supplier-Of-Lab-Grown-Diamond_Banner_Desktop.jpg")',
              backgroundSize: "cover",
              width: "100%",
              height: "height: 63vh;",
            }}
          >
            <div className="caption">
              <div className="firstBlog text-white">
                <div>#5.</div>
                <h1 className="text-white">
                  Diamonds are forever. are lab grown diamond too ?
                </h1>
                <p>
                  Some may call them manmade diamonds; others would prefer CVD
                  or man-made diamonds. The truth is lab grown diamonds have as
                  names as it has myths .........
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div className="text-center">
          <h1 className="main-title">News & Blog</h1>
        </div>
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                THE CUT OR CLARITY FACTOR: WHICH MATTERS MOST FOR LAB GROWN
                DIAMONDS?
              </p>
              <span className="inner-blog-date fs-6">April 07, 2023</span>
              <p className="inner-blog-descreption">
                Among The 4 C's In A Lab Grown Diamond - Cut, Color, Clarity,
                And Carat, The Cut Of The Stone Plays A Significant Role In
                Determining Its Beaut
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                REVOLUTION OF THE LAB GROWN DIAMOND IN MODERN TIMES!
              </p>
              <span className="inner-blog-date fs-6">April 07, 2023</span>
              <p className="inner-blog-descreption">
                Shining Like A Diamond In This Era Is One Of The Biggest
                Revolutions. Lab Grown Diamond Is A Type Of Diamond Produced By
                The Manufacturing Method. A Genuine Diamond With The Help Of A
                Geological Process Gets Extracted Through Mining.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4 first-blog-area">
            <div className="quotes-bg d-flex align-items-center">
              <p className="main-quotes">
                <span className="quotes1">“</span>
                <br />
                Enriching Every Home With The Brilliance Of Diamonds Will
                Fulfill Our Sole Mission.
                <br />
                <span className="quotes2">”</span>
                <br />
                <span className="quotes-auther">- Ghanshyam Bhanderi</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container hi">
        <div className="row">
          <div className="col-8 news"></div>
          <div className="inner-news">
            <p className="news-title">
              GO ENVIRONMENT FRIENDLY WITH SURAT’S BHANDERI LAB GROWN
              SUSTAINABLE DIAMONDS WHICH HAVE SET A BENCHMARK IN THE CVD DIAMOND
              INDUSTRY
            </p>
            <span className="news-date">April 07, 2023</span>
            <p className="news-descript">
              Among The 4 C's In A Lab Grown Diamond - Cut, Color, Clarity, And
              Carat, The Cut Of The Stone Plays A Significant Role In
              Determining Its Beaut
            </p>
            <button className="news-btn">
              <a
                href="https://helloentrepreneurs.in/go-environment-friendly-with-surats-bhanderi-lab-grown-sustainable-diamonds-which-have-set-a-benchmark-in-the-cvd-diamond-industry/"
                target="_blank"
              >
                READ MORE
              </a>
            </button>
          </div>
          <div className="col-4 second-blog-area small-blog">
            <div className="col-6 first-blog-img-sec blog-img1"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                THE CUT OR CLARITY FACTOR: WHICH MATTERS MOST FOR LAB GROWN
                DIAMONDS?
              </p>
              <span className="inner-blog-date fs-6">April 07, 2023</span>
              <p className="inner-blog-descreption">
                Among The 4 C's In A Lab Grown Diamond - Cut, Color, Clarity,
                And Carat, The Cut Of The Stone Plays A Significant Role In
                Determining Its Beaut
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img2"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">HOW DOES A CVD DIAMOND WORK?</p>
              <span className="inner-blog-date fs-6">February 17, 2023</span>
              <p className="inner-blog-descreption">
                Check out our comprehensive guide on the working growth process
                of CVD diamond that will help you have core knowledge of
                sustainable
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img3"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                CVD DIAMONDS VS. NATURAL DIAMONDS – A COMPARISON OF
              </p>
              <span className="inner-blog-date fs-6">February 09, 2023</span>
              <p className="inner-blog-descreption">
                There are so many factors involved in finding the perfect
                diamond for your jewelry. Beyond the 4C’s i.e., cut, color,
                carat, and clarity, you also have to consider whether to choose
                CVD Diamonds or Natural Diamonds.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img4"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                CHOOSING LAB GROWN DIAMONDS ARE BETTER FOR THE PLANET
              </p>
              <span className="inner-blog-date fs-6">November 30, 2022</span>
              <p className="inner-blog-descreption">
                Everything has a sustainable substitute these days and is also
                majorly in the spotlight, be it clothing, lifestyle,
                automobiles, or the jewelry
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img5"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                A GUIDE TO THE GRADING OF LAB GROWN DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">November 11, 2022</span>
              <p className="inner-blog-descreption">
                The founder of the Gemological Institute of America (GIA),
                Robert M Shipley, introduced the 4 C's in 1953. This
                introduction brought uniformity and objective standards for
                jewelers and gemologists to grade and price diamonds. Although
                there are other grading systems, the GIA system is the most
                widespread in the world for lab grown diamonds.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img6"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                PLANNING TO BUY LAB GROWN DIAMOND? STEP BY STEP GUIDE
              </p>
              <span className="inner-blog-date fs-6">November 02, 2022</span>
              <p className="inner-blog-descreption">
                People believe there is nothing like a diamond, but have you
                considered lab-grown diamonds? We cherish the sentiment behind
                diamonds, especially when they have been offered to you by your
                loved ones without whom you simply cannot live.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img7"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                EVERYTHING ABOUT THE DIAMOND COLOR SCALE
              </p>
              <span className="inner-blog-date fs-6">October 25, 2022</span>
              <p className="inner-blog-descreption">
                A standardized grading system, the diamond color scale evaluates
                the absence of hue in the gemstone. Introduced by the
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img8"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                HOW ARE LAB GROWN DIAMONDS MADE
              </p>
              <span className="inner-blog-date fs-6">October 12, 2022</span>
              <p className="inner-blog-descreption">
                We all know diamonds can accentuate our whole look from dull to
                glam within seconds. But not everyone can afford to buy this
                luxurious
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img9"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                A COMPLETE GUIDE TO CVD DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">September 30, 2022</span>
              <p className="inner-blog-descreption">
                The full form of CVD is Chemical Vapor Deposition and is
                generally used to manufacture diamonds grown in this process
                mentioned
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img10"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                GEMOLOGICAL INSTITUTE OF AMERICA-CERTIFIED DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">OSeptember 22, 2022</span>
              <p className="inner-blog-descreption">
                Purchasing a Diamond for your special one? Have no idea about
                how to get started or what it means to buy certified diamonds?
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img11"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                WHICH INSTITUTE CERTIFIES LAB GROWN DIAMOND?
              </p>
              <span className="inner-blog-date fs-6">August 18, 2022</span>
              <p className="inner-blog-descreption">
                Lab grown diamond is assessed based on the same grading
                standards that are utilized in naturally extracted diamonds.
                Every piece of diamond
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img12"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                HOW TO CHOOSE LAB GROWN DIAMOND SHAPE
              </p>
              <span className="inner-blog-date fs-6">July 26, 2022</span>
              <p className="inner-blog-descreption">
                A lab grown diamond is physically, chemically, and optically
                similar to a naturally mined gemstone. It exhibits the same
                sparkle and shines as your traditionally mined diamond.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img13"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                BLGD - THE BEST MANUFACTURER AND SUPPLIER OF LAB GROWN
              </p>
              <span className="inner-blog-date fs-6">June 29, 2022</span>
              <p className="inner-blog-descreption">
                The very definition of the precious gemstone is changing, all
                thanks to the new and upcoming jewelry advancements. Diamonds
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img14"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                LAB GROWN DIAMONDS VS REAL DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">June 22, 2022</span>
              <p className="inner-blog-descreption">
                Real and Lab Grown diamonds have a similar appearance. Lab
                diamonds grow in labs using special equipment, and real diamonds
                take millions of years to grow. Of course, both are diamonds.
                The only thing that sets apart a natural diamond from lab grown
                diamonds is its source of origin.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img15"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                THE SUSTAINABILITY OF LAB GROWN DIAMOND
              </p>
              <span className="inner-blog-date fs-6">June 16, 2022</span>
              <p className="inner-blog-descreption">
                The industry of natural diamonds has always been in some sort of
                conflict for its unfair practices and methods. The process of
                mining and
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img16"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                WHAT ARE THE MOST OFTEN ASKED QUESTIONS ABOUT LAB GROWN
              </p>
              <span className="inner-blog-date fs-6">June 09, 2022</span>
              <p className="inner-blog-descreption">
                Lab Grown diamonds have made a different aura in today’s Diamond
                Market. The glitz and the glam it carries in itself have made it
                a beloved
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img17"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                COMPLETE GUIDE TO LAB GROWN DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">June 08, 2022</span>
              <p className="inner-blog-descreption">
                Lab grown diamonds have been popular around for quite eventually
                now. The buzz, hype, and growing demand is reaching new levels
                each
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img18"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                MARKET, FUTURE AND HISTORY OF LAB GROWN DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">May 31, 2022</span>
              <p className="inner-blog-descreption">
                Extracting natural diamonds from the earth is plagued by
                controversial practices and issues. Sixty-five percent of the
                world’s natural diamond i
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img19"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                THE FUTURE OF LAB GROWN DIAMOND INDUSTRY IN UPCOMING
              </p>
              <span className="inner-blog-date fs-6">May 21, 2022</span>
              <p className="inner-blog-descreption">
                With the rise in the trend of sustainability, environmentally
                friendly, and eco-friendly products, lab grown diamonds are the
                future of the diamond industry
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img20"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                LAB GROWN DIAMOND JEWELRY MARKET COULD ALMOST DOUBLE BY 2025
              </p>
              <span className="inner-blog-date fs-6">May 20, 2022</span>
              <p className="inner-blog-descreption">
                Lab made diamonds are the new trend in the diamond industry and
                we can continuously see an upward curve in the adaption of
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img21"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                HOW ARE LAB CREATED DIAMONDS COMPARED TO REAL DIAMONDS?
              </p>
              <span className="inner-blog-date fs-6">May 19, 2022</span>
              <p className="inner-blog-descreption">
                The only difference between lab created diamonds and real
                diamonds is their place of origin. They have similar chemical,
                physical, and
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img22"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                CVD DIAMONDS THE NEWEST DIAMOND TREND IN THE MARKET
              </p>
              <span className="inner-blog-date fs-6">May 18, 2022</span>
              <p className="inner-blog-descreption">
                CVD or chemical vapor deposition diamonds are made in labs in an
                extremely controlled environment that replicates the naturally
                mined
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img23"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                THE IMPACT OF LAB GROWN DIAMONDS ON THE JEWELRY MARKET IN
              </p>
              <span className="inner-blog-date fs-6">May 17, 2022</span>
              <p className="inner-blog-descreption">
                The only difference between lab created diamonds and real
                diamonds is their place of origin. They have similar chemical,
                physical, and
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img24"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                THE 4 C'S OF DIAMONDS: COLOR, CUT, CLARITY, AND CARAT WEIGHT
              </p>
              <span className="inner-blog-date fs-6">May 16, 2022</span>
              <p className="inner-blog-descreption">
                The 4 C’s of a diamond includes cut color, carat, and clarity.
                The 4c of diamonds plays a vital role in determining the beauty
                of the
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img25"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                LAB GROWN DIAMONDS: ARE ECO-FRIENDLY ALTERNATIVE
              </p>
              <span className="inner-blog-date fs-6">May 01, 2022</span>
              <p className="inner-blog-descreption">
                It’s a common proverb that diamonds are girls’ best friends. So
                if you get an option to afford diamonds that are cheaper and
                more
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img26"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                WHAT IS THE DIFFERENCE BETWEEN NATURAL AND MAN MADE DIAMONDS?
              </p>
              <span className="inner-blog-date fs-6">April 13, 2022</span>
              <p className="inner-blog-descreption">
                Man made diamonds have gained immense popularity in the past few
                years. They are a more feasible and practical choice when buying
                diamonds.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img27"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                DOES THE GIA GRADE LAB GROWN DIAMONDS?
              </p>
              <span className="inner-blog-date fs-6">March 22, 2022</span>
              <p className="inner-blog-descreption">
                Lab grown diamonds are created in laboratories, as the name
                implies. They are not mined or extracted out from the earth. lab
                grown
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img28"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                TOP 10 FACTS ABOUT LAB GROWN DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">March 06, 2022</span>
              <p className="inner-blog-descreption">
                Whether you are looking for a ring, earring, or necklace, a
                diamond is something that can take your jewelry-wearing
                experience to the next level.
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img29"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                TOP 5 FACTS ABOUT LAB CREATED DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">February 27, 2022</span>
              <p className="inner-blog-descreption">
                Lab-created diamonds are developed through the application of
                the procedure that results in the creation of the natural gems
                in the
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img30"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                DIAMOND GROWS IN THE LAB- THE BEST COMPANY IN THE US
              </p>
              <span className="inner-blog-date fs-6">February 19, 2022</span>
              <p className="inner-blog-descreption">
                Diamonds are attractive with supernatural complexity in their
                style. Diamonds can be mined or manufactured in industry. Mined
                diamonds are
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img31"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                COMPLETE GUIDE OF DIAMOND CLARITY
              </p>
              <span className="inner-blog-date fs-6">February 12, 2022</span>
              <p className="inner-blog-descreption">
                Most of the women out there love adorning diamonds while so many
                men would want to gift their loving ones a piece of diamond
                jewelry. Diamonds
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img32"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                A DREAM TO REALITY LAB CREATED DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">January 27, 2022</span>
              <p className="inner-blog-descreption">
                Many women out there have a dream to wear diamonds. They are
                accessible to only privileged people and are nothing but a dream
                for som
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area ">
            <div className="col-6 second-blog-img-sec blog-img33"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                10 THINGS YOU SHOULD KNOW ABOUT LAB GROWN DIAMONDS
              </p>
              <span className="inner-blog-date fs-6">January 01, 2022</span>
              <p className="inner-blog-descreption">
                The lab-grown diamond is a type of diamond that is being
                manufactured in context with the natural diamond extracted by
                the process of mining or
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
          <div className="col-4  second-blog-area">
            <div className="col-6 second-blog-img-sec blog-img34"></div>
            <div className="col-6 second-blog-img-sec1">
              <p className="inner-blog-title-second">
                WHAT IS THE DIFFERENCE BETWEEN LAB-CREATED AND MINED DIAMONDS?
              </p>
              <span className="inner-blog-date fs-6">December 07, 2021</span>
              <p className="inner-blog-descreption">
                Some diamonds take the old route, made deep in the Earth over
                billions of years, and stay underground until humans mine the
                Earth for
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hi1 mt-5 mb-5">
        <div className="row">
          <div className="col-4 first-blog-area">
            <div className="col-6 first-blog-img-sec blog-img35"></div>
            <div className="col-6 first-blog-img-sec1">
              <p className="inner-blog-title">
                LAB-GROWN DIAMONDS MARKET REACHING NEW HEIGHTS
              </p>
              <span className="inner-blog-date fs-6">November 15, 2020</span>
              <p className="inner-blog-descreption">
                Diamonds are the stones that become mouthpieces of love
                feelings. In addition, they are the perfect gift for beloved
                ones on the eve of
              </p>
              <button className="inner-blog-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
