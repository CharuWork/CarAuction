import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel.js";
const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("tab2"); // Set default active tab to "tab2"

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <section className="car-details">
      <div className="container">
        <div className="row">
          <div id="single-car" className="col-md-8">
            <div className="up-content clearfix">
              <h2>Audi a6 tsi s-line</h2>
              <span>$30.000</span>
            </div>
            {/* ProductCarousel */}
            <ProductCarousel />
            {/* <div className="flexslider">
              <div
                className="flex-viewport"
                style={{ overflow: "hidden", position: "relative" }}
              >
                <ul
                  className="slides"
                  style={{
                    width: "1400%",
                    transitionDuration: "0.6s",
                    transform: "translate3d(-3710px, 0px, 0px)",
                  }}
                >
                  <li
                    data-thumb
                    className="clone"
                    aria-hidden="true"
                    style={{ width: 742, float: "left", display: "block" }}
                  >
                    <img src draggable="false" />
                  </li>
                  <li
                    data-thumb="assets/images/05-featured-slide-117x83.jpg"
                    style={{ width: 742, float: "left", display: "block" }}
                    className
                  >
                    <img
                      src="assets/images/05-featured-slide.jpg"
                      draggable="false"
                    />
                  </li>
                  <li
                    data-thumb="assets/images/04-featured-slide-117x83.jpg"
                    style={{ width: 742, float: "left", display: "block" }}
                    className
                  >
                    <img
                      src="assets/images/04-featured-slide.jpg"
                      draggable="false"
                    />
                  </li>
                  <li
                    data-thumb
                    style={{ width: 742, float: "left", display: "block" }}
                    className
                  >
                    <img src draggable="false" />
                  </li>
                  <li
                    data-thumb
                    style={{ width: 742, float: "left", display: "block" }}
                    className
                  >
                    <img src draggable="false" />
                  </li>
                  <li
                    data-thumb
                    style={{ width: 742, float: "left", display: "block" }}
                    className="flex-active-slide"
                  >
                    <img src draggable="false" />
                  </li>
                  <li
                    data-thumb="assets/images/05-featured-slide-117x83.jpg"
                    style={{ width: 742, float: "left", display: "block" }}
                    className="clone"
                    aria-hidden="true"
                  >
                    <img
                      src="assets/images/05-featured-slide.jpg"
                      draggable="false"
                    />
                  </li>
                </ul>
              </div>
              <ol className="flex-control-nav flex-control-thumbs">
                <li>
                  <img
                    src="assets/images/05-featured-slide-117x83.jpg"
                    className
                    draggable="false"
                  />
                </li>
                <li>
                  <img
                    src="assets/images/04-featured-slide-117x83.jpg"
                    draggable="false"
                    className
                  />
                </li>
                <li>
                  <img src draggable="false" className />
                </li>
                <li>
                  <img src draggable="false" className />
                </li>
                <li>
                  <img src draggable="false" className="flex-active" />
                </li>
              </ol>
              <ul className="flex-direction-nav">
                <li className="flex-nav-prev">
                  <a className="flex-prev" href="#">
                    Previous
                  </a>
                </li>
                <li className="flex-nav-next">
                  <a className="flex-next" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="tab">
              <div className="tabs">
                <ul className="tab-links">
                  <li className={activeTab === "tab1" ? "active" : ""}>
                    <a onClick={() => handleTabClick("tab1")}>
                      Vehicle Overview
                    </a>
                  </li>
                  <li className={activeTab === "tab2" ? "active" : ""}>
                    <a onClick={() => handleTabClick("tab2")}>Description</a>
                  </li>
                  <li className={activeTab === "tab3" ? "active" : ""}>
                    <a onClick={() => handleTabClick("tab3")}>
                      Vehicle Location
                    </a>
                  </li>
                  <li className={activeTab === "tab4" ? "active" : ""}>
                    <a onClick={() => handleTabClick("tab4")}>Contact Dealer</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    id="tab1"
                    className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                  >
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi in dolorem blanditiis voluptatibus quidem nisi
                      eaque, cupiditate minus omnis, voluptatum corporis neque
                      placeat quod temporibus mollitia. Quod accusamus iure
                      eveniet laboriosam laudantium, saepe quidem incidunt,
                      laboriosam aliquid quibusdam atque.
                    </p>
                  </div>
                  <div
                    id="tab2"
                    className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                  >
                    <h6>
                      The dealer's details will be emailed to you immediately
                      after you submit your query
                    </h6>
                    <p>
                      Selvage drinking vinegar roof party bitters beard wolf
                      craft beer Blue Bottle, literally you probably haven't
                      heard of them. Deep v jean shorts Williamsburg synth pork
                      belly actually. Organic PBRB viral four loko Bushwick pork
                      belly. Selvage fashion axe sartorial cliche before they
                      sold out, mustache vinyl DIY gastropub fingerstache
                      mlkshk. High Life lo-fi chillwave meggings.
                      <br />
                      <br />
                      Migas gluten-free ennui Truffaut ugh, listicle umami plaid
                      lomo sustainable mumblecore street art biodiesel
                      readymade. Polaroid ethical Pitchfork, sartorial bitters
                      mlkshk cliche keytar tofu four loko pork belly High Life
                      lomo listicle.
                      <br />
                      <br />
                      Semiotics Vice Wes Anderson Bushwick organic. Chambray
                      twee Banksy, asymmetrical disrupt bitters selfies
                      Helvetica. Gentrify direct trade disrupt Odd Future.
                      Bespoke tote bag small batch, try-hard drinking vinegar
                      cronut beard migas ethical. Seitan wolf Vice banh mi YOLO
                      flannel. Banh mi pug cred church-key, cardigan drinking
                      vinegar hella bicycle rights ugh sustainable. Marfa
                      Bushwick aesthetic, locavore messenger bag 8-bit tote bag.
                    </p>
                  </div>
                  <div
                    id="tab3"
                    className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                  >
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi in dolorem blanditiis voluptatibus quidem nisi
                      eaque, cupiditate minus omnis, voluptatum corporis neque
                      placeat quod temporibus mollitia. Quod accusamus iure
                      eveniet laboriosam laudantium.
                    </p>
                  </div>
                  <div
                    id="tab4"
                    className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                  >
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi in dolorem blanditiis voluptatibus quidem nisi
                      eaque, cupiditate minus omnis, voluptatum corporis neque
                      placeat quod temporibus mollitia. Quod accusamus iure
                      eveniet laboriosam laudantium.
                    </p>
                  </div>
                </div>
                <div className="more-info">
                  <div className="row">
                    <div className="first-info col-md-4">
                      <h4>Enterainment</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Central Locking
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Automatic Air Conditioning
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Full Leather Interior
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Electric Heated Seats
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Navigation GPS Multimedia
                        </li>
                      </ul>
                    </div>
                    <div className="second-info col-md-4">
                      <h4>exterior features</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Parking Sensors
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Double Exhaust
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Electric Mirrors
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Manifacturing Year 2015
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Full Service History
                        </li>
                      </ul>
                    </div>
                    <div className="third-info col-md-4">
                      <h4>interior features</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          ABS
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Xenon Headlights
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Immobilizer
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="left-info" className="col-md-4">
            <div className="details">
              <div className="head-side-bar">
                <h4>Vehicle Details</h4>
              </div>
              <div className="list-info">
                <ul>
                  <li>
                    <span>Make:</span>Audi
                  </li>
                  <li>
                    <span>Fabrication Year:</span>2015-6-17
                  </li>
                  <li>
                    <span>Fuel Type:</span>Gasoline Fuel
                  </li>
                  <li>
                    <span>No. of Gears:</span>5
                  </li>
                  <li>
                    <span>Transmission:</span>Automatic
                  </li>
                  <li>
                    <span>Color:</span>Blue
                  </li>
                  <li>
                    <span>Fuel Economy:</span>12l/City - 10l/hwy
                  </li>
                  <li>
                    <span>Motor Capacity:</span>( 179KW / 400BHP )
                  </li>
                  <li>
                    <span>Country of Origin:</span>Germany ( Munich )
                  </li>
                  <li>
                    <span>Price:</span>$30,000
                  </li>
                </ul>
              </div>
            </div>
            <div className="enquiry">
              <div className="head-side-bar">
                <h4>Vehicle Enquiry</h4>
              </div>
              <div className="contact-form">
                <p>
                  The dealer's details will be emailed to you immediately after
                  you submit your query.
                </p>
                <input
                  type="text"
                  className="name"
                  name="s"
                  placeholder="Your Name"
                  defaultValue
                />
                <input
                  type="text"
                  className="email"
                  name="s"
                  placeholder="Email Address"
                  defaultValue
                />
                <input
                  type="text"
                  className="phone"
                  name="s"
                  placeholder="Your Phone Number"
                  defaultValue
                />
                <textarea
                  id="message"
                  className="message"
                  name="message"
                  placeholder="Message..."
                  defaultValue={""}
                />
              </div>
              <div className="subhead-side-bar">
                <h4>Ask a question</h4>
              </div>
              <div className="check-boxes">
                <ul>
                  <li>
                    <input type="checkbox" id="c1" name="cc" />
                    <label htmlFor="c1">Can I book a test drive?</label>
                  </li>
                  <li>
                    <input type="checkbox" id="c2" name="cc" />
                    <label htmlFor="c2">
                      What is your adress and opening hours?
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="c3" name="cc" />
                    <label htmlFor="c3">Other?</label>
                  </li>
                </ul>
                <div className="advanced-button">
                  <a href="#">
                    Send enquiry <i className="fa fa-paper-plane" />
                  </a>
                </div>
              </div>
              <div className="subhead-side-bar">
                <h4>Contact the Seller</h4>
              </div>
              <div className="call-info">
                <i className="fa fa-phone" />
                <h6>816-819-0221</h6>
                <p>
                  Car code: <span>55637</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
