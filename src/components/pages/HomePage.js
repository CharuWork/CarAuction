import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import CarouselComponent from "../layout/CarouselComponent.js";
import FeaturedCarItem from "../layout/FeaturedCarComponent.js";

const HomePage = () => {
  const [cars] = useState([
    {
      name: "Mercedes Amg 6.3",
      price: "52,000",
      description: "Donec eu nullas sapien pretium...",
      fuelType: "Diesel",
      type: "Sport",
      mileage: "12,000",
      image: "assets/images/car2.jpg",
      link: "single-list.html",
    },
    {
      name: "Mercedes Amg 6.3",
      price: "52,000",
      description: "Donec eu nullas sapien pretium...",
      fuelType: "Diesel",
      type: "Sport",
      mileage: "12,000",
      image: "assets/images/car3.jpg",
      link: "single-list.html",
    },
    {
      name: "Mercedes Amg 6.3",
      price: "52,000",
      description: "Donec eu nullas sapien pretium...",
      fuelType: "Diesel",
      type: "Sport",
      mileage: "12,000",
      image: "assets/images/car2.jpg",
      link: "single-list.html",
    },
    {
      name: "Mercedes Amg 6.3",
      price: "52,000",
      description: "Donec eu nullas sapien pretium...",
      fuelType: "Diesel",
      type: "Sport",
      mileage: "12,000",
      image: "assets/images/car3.jpg",
      link: "single-list.html",
    },
    {
      name: "Mercedes Amg 6.3",
      price: "52,000",
      description: "Donec eu nullas sapien pretium...",
      fuelType: "Diesel",
      type: "Sport",
      mileage: "12,000",
      image: "assets/images/car2.jpg",
      link: "single-list.html",
    },
  ]);
  return (
    <div>
      <CarouselComponent />
      {/* <div className="caraousel"></div> Trying purpose*/}
      {/* See all cars */}
      <div id="cta-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Owners of salvage-title <em>vehicles</em> will encounter some
                unique issues.
              </p>
              <div className="advanced-button">
                <NavLink to="/SeeAll">
                  See all cars
                  <i className="fa fa-car" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why us */}
      <section className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="left-content">
                <div className="heading-section">
                  <h2>Why choose us?</h2>
                  <span>
                    Vivamus gravida magna massa in cursus mi vehicula at. Nunc
                    sem quam suscipit
                  </span>
                  <div className="line-dec" />
                </div>
                <div className="services d-flex flex-wrap">
                  <div className="col-md-6">
                    <div className="service-item">
                      <i className="fa fa-bar-chart-o" />
                      <div className="tittle">
                        <h2>Results of Drivers</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item">
                      <i className="fa fa-gears" />
                      <div className="tittle">
                        <h2>upgrades performance</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item second-row">
                      <i className="fa fa-pencil" />
                      <div className="tittle">
                        <h2>product sellers</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item second-row last-service">
                      <i className="fa fa-wrench" />
                      <div className="tittle">
                        <h2>Fast Service</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-img">
                <img src="assets/images/car3.jpg" alt="Car" />
                <div className="img-bg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature car listing */}
      <section className="featured-listing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-2 text-center">
                <h2>Featured Cars Listing</h2>
                <span>
                  Vivamus gravida magna massa in cursus mi vehicula at. Nunc sem
                  quam suscipit
                </span>
                <div className="dec">
                  <i className="fa fa-car" />
                </div>
                <div className="line-dec" />
              </div>
            </div>
          </div>
          <div className="row">
            <div id="featured-cars">
              {cars.map((car, index) => (
                <FeaturedCarItem key={index} car={car} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG NEWS */}
      <section className="blog-news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-2 text-center">
                <h2>Blog News</h2>
                <span>
                  Vivamus gravida magna massa in cursus mi vehicula at. Nunc sem
                  quam suscipit
                </span>
                <div className="dec">
                  <i className="fa fa-file" />
                </div>
                <div className="line-dec" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="left-video">
                <img src="assets/images/car3.jpg" alt="Car" />
                <div className="video-content">
                  <div className="inner-content">
                    <i className="fa fa-play" />
                    <div className="tittle">
                      <NavLink to="single-blog.html">
                        <h2>Hella kogi whatever, small batch pickled</h2>
                      </NavLink>
                      <ul>
                        <li>May 14, 2015</li>
                        <li>
                          Posted by <NavLink to="#">Admin</NavLink>
                        </li>
                        <li>2 Comments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-item">
                <div className="up-content">
                  <ul>
                    <li>May 14, 2015</li>
                    <li>
                      Posted by <NavLink to="#">Admin</NavLink>
                    </li>
                  </ul>
                  <div className="tittle">
                    <NavLink to="single-blog.html">
                      <h2>Normcore pour-over taxidermy twee</h2>
                    </NavLink>
                  </div>
                </div>
                <p>
                  Praesent mollis at odio in aliquam. Morbi sit amet enim ante.
                  Phasellus commodo urna sed laoreet mauris iaculis blandit.
                  Nulla facilisi. Quisque blandit magna nec
                </p>
                <NavLink to="single-blog.html">Read More</NavLink>
              </div>
              <div className="blog-item">
                <div className="up-content">
                  <ul>
                    <li>May 14, 2015</li>
                    <li>
                      Posted by <NavLink to="#">Admin</NavLink>
                    </li>
                  </ul>
                  <div className="tittle">
                    <NavLink to="single-blog.html">
                      <h2>Retro art party vinyl meditation</h2>
                    </NavLink>
                  </div>
                </div>
                <p>
                  Praesent mollis at odio in aliquam. Morbi sit amet enim ante.
                  Phasellus commodo urna sed laoreet mauris iaculis blandit.
                  Nulla facilisi. Quisque blandit magna nec
                </p>
                <NavLink to="single-blog.html">Read More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
