import React from "react";

const socialheader = () => {
  return (
    <div>
      <div id="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 hidden-sm">
              <div className="right-info">
                <ul>
                  <li>
                    Call us: <em>570-694-4002</em>
                  </li>
                  <li>
                    <a href="#">Get Free Appointment →</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default socialheader;
