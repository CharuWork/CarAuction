import React, { useState } from "react";
import ProductDetail from "../layout/ProductDetail";
import PageHeading from "../layout/PageHeading";
import FeaturedCarItem from "../layout/FeaturedCarComponent.js";

const ProductPage = () => {
  const pageTitle = "Vehicle Details";
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
  ]);
  return (
    <div>
      <PageHeading title={pageTitle} />
      {/* Vehicle Details Section */}
      <ProductDetail />
      <section className="featured-listing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-2 text-center">
                <h2>RECENT VEHICLES</h2>
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
    </div>
  );
};

export default ProductPage;
