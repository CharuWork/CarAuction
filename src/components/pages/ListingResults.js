import React, { useState } from "react";
import PageHeading from "../layout/PageHeading";
import { NavLink } from "react-router-dom";
import FeaturedItem from "../layout/VehicleComponent";

const ListingResults = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const applyFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    if (!isNaN(min) && !isNaN(max)) {
      // Here, you can filter your data based on min and max prices
      // For example:
      // const filteredData = originalData.filter(product => product.price >= min && product.price <= max);
      // setFilteredProducts(filteredData);
    }
  };

  const pageTitle = "All Cars";
  return (
    <div>
      <PageHeading title={pageTitle} />
      <section className="listing-page">
        <div className="container">
          <div className="row">
            <div id="listing-cars" className="col-md-9">
              <div className="pre-featured">
                <div className="info-text">
                  <h4>24 results founded</h4>
                </div>
                <div className="right-content">
                  <div className="input-select">
                    <select name="mark" id="mark">
                      <option value={-1}>Sorted by</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="grid-list">
                    <ul>
                      <li>
                        <NavLink to="#">
                          <i className="fa fa-list" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="fa fa-square" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <FeaturedItem
                imageSrc="assets/images/car2.jpg"
                title="Mercedes Amg 6.3"
                price="52,000"
                description="Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo."
                detailsLink="single-list.html"
                rating={4}
                fuelType="Diesel"
                carType="Sport"
                mileage="12,000"
              />
              <FeaturedItem
                imageSrc="assets/images/car2.jpg"
                title="Mercedes Amg 6.3"
                price="52,000"
                description="Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo."
                detailsLink="single-list.html"
                rating={4}
                fuelType="Diesel"
                carType="Sport"
                mileage="12,000"
              />
              <FeaturedItem
                imageSrc="assets/images/car2.jpg"
                title="Mercedes Amg 6.3"
                price="52,000"
                description="Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo."
                detailsLink="single-list.html"
                rating={4}
                fuelType="Diesel"
                carType="Sport"
                mileage="12,000"
              />

              <div className="pagination">
                <div className="prev">
                  <NavLink to="#">
                    <i className="fa fa-arrow-left" />
                    Prev
                  </NavLink>
                </div>
                <div className="page-numbers">
                  <ul>
                    <li>
                      <NavLink to="#">1</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">...</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">14</NavLink>
                    </li>
                    <li className="active">
                      <NavLink to="#">15</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">16</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">...</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">47</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="next">
                  <NavLink to="#">
                    Next
                    <i className="fa fa-arrow-right" />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* sidebar */}
            <div id="sidebar" className="col-md-3">
              <div className="sidebar-content">
                <div className="head-side-bar">
                  <h4>Refine Your Search</h4>
                </div>
                <div className="search-form">
                  <div className="select">
                    <select name="mark" id="make">
                      <option value={-1}>Select Makes</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="select">
                    <select name="mark" id="model">
                      <option value={-1}>Select Car Model</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="select">
                    <select name="mark" id="style">
                      <option value={-1}>Select Style</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                    {/* <div>Slider</div> */}
                    <div className="min-max-range">
                      <div className="min-max">
                        <input
                          type="number"
                          placeholder="Min Price"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                          type="number"
                          placeholder="Max Price"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                        />
                      </div>
                      {/* <button className="advanced-button" onClick={applyFilter}>
                        Apply Filter
                      </button> */}
                    </div>
                  </div>
                  <div className="select">
                    <select name="mark" id="types">
                      <option value={-1}>Select Car Types</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="select">
                    <select name="mark" id="color">
                      <option value={-1}>Select Color</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="advanced-button">
                    <a href="listing-right.html">
                      Search Now
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="video-post">
              <div className="video-holder">
                <img src="assets/images/Car2.jpg" alt />
                <div className="video-content">
                  <a href="single-blog.html">
                    <i className="fa fa-play" />
                  </a>
                  <a href="single-blog.html">
                    <h4>Video post example</h4>
                  </a>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingResults;
