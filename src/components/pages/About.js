import React from "react";
import PageHeading from "../layout/PageHeading";

const About = () => {
  const pageTitle = "About";
  return (
    <div>
      <PageHeading title={pageTitle} />
      <section className="who-is">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <div className="heading">
                  <h2>Who is the auction?</h2>
                  <span>Irony distillery fashion axe</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus sed est sed orcit elit auctor ullamcorper et
                    imperdiet lectus. Vivamus gravida metus vitae nunc sempe
                    lacinia est pulvinar. Ut sit amet lacus luctus, iaculis
                    turpis sit amet.
                    <br />
                    <br />
                    Maecenas eros mi, lacinia eu ultricies vel, elementum et
                    justo. Ut at tortor a odio vestib suscipit non sit amet
                    dolor. Morbi molestie magna nec metus facilisis, at iaculis
                    adipiscing. Praesent ac diam velit. Curabitur lacinia
                    tristique velit ut laoreet. Nam pretium id risuse fermentum.
                    Aenean eu euismod justo.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <img src="assets/images/car3.jpg" alt="Car" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
