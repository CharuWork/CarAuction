import React from "react";
import { NavLink } from "react-router-dom";

const VehicleComponent = ({
  imageSrc,
  title,
  price,
  description,
  detailsLink,
  rating,
  fuelType,
  carType,
  mileage,
}) => {
  return (
    <div className="featured-item">
      <img src={imageSrc} alt="" />
      <div className="right-content">
        <NavLink to={detailsLink}>
          <h2>{title}</h2>
        </NavLink>
        <span>{price}</span>
        <div className="light-line" />
        <p>{description}</p>
        <div className="view-details">
          <NavLink to="#">View Details</NavLink>
        </div>
        <div className="item-rate">
          <ul>
            {[...Array(rating).keys()].map((index) => (
              <li key={index}>
                <i className="fa fa-star" />
              </li>
            ))}
            {[...Array(5 - rating).keys()].map((index) => (
              <li key={index}>
                <i className="fa fa-star-o" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
        <div className="car-info">
          <ul>
            <li>
              <i className="fa-solid fa-gas-pump"></i> {fuelType}
            </li>
            <li>
              <i className="fa fa-car" aria-hidden="true"></i> {carType}
            </li>
            <li>
              <i className="fa-solid fa-road"></i> {mileage}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehicleComponent;
