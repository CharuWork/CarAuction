import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onChange = (index) => {
    // Handle change event here, for example, update the state with the current index.
    setCurrentIndex(index);
  };

  const onClickItem = (index) => {
    // Handle click on a carousel item, if needed.
    setCurrentIndex(index);
  };

  const onClickThumb = (index) => {
    // Handle click on a thumbnail, if needed.
  };

  return (
    <Carousel className="product-caraousel">
      <div>
        <img src="assets/images/car1.jpg" />
      </div>
      <div>
        <img src="assets/images/car2.jpg" />
      </div>
      <div>
        <img src="assets/images/car3.jpg" />
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
