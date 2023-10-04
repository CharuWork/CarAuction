import React from "react";
import { NavLink } from "react-router-dom";
const PageHeading = (props) => {
  return (
    <div
      id="page-heading"
      style={{ backgroundimage: "url(/assets/images/vehicle_cover.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>{props.title}</h1>
            <div className="line" />
            <span>
              Praesent volutpat nisi sed imperdiet facilisis felis turpis
              fermentum lectus
            </span>
            <div className="page-active">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <NavLink to="">{props.title}</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
