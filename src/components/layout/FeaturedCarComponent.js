import React from "react";
import { NavLink } from "react-router-dom";

const FeaturedCarComponent = ({ car }) => {
  return (
    <div className="featured-item col-md-15 col-sm-6">
      <img src={car.image} alt={car.name} />
      <div className="down-content">
        <NavLink to="/vehicle">
          <h2>{car.name}</h2>
        </NavLink>
        <span>{car.price}</span>
        <div className="light-line" />
        <p>{car.description}</p>
        <div className="car-info">
          <ul>
            <li>
              <i className="fa-solid fa-gas-pump"></i>
              {car.fuelType}
            </li>
            <li>
              <i className="fa fa-car" aria-hidden="true"></i>
              {car.type}
            </li>
            <li>
              <i className="fa-solid fa-road"></i>
              {car.mileage}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarComponent;
