import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
    setLoaded(false);
  };

  const handleImageLoad = () => {
    setLoaded(true);
  };
  const cars = [
    {
      id: 1,
      imageUrl: "assets/images/car3.jpg",
      price: "$30,000",
      name: "vencer sarthe",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "assets/images/car2.jpg",
      price: "$30,000",
      name: "vencer sarthe",
      link: "single-list.html",
    },
    {
      id: 3,
      imageUrl: "assets/images/car3.jpg",
      price: "$30,000",
      name: "vencer sarthe",
      link: "single-list.html",
    },
  ];
  const carouselItems = [
    {
      backgroundImage: "/assets/images/car1.jpg",
      head: "BEST SITE OF VEHICLE",
      caption: "FIND USED CARS ,Visit all cars to see listing",
      button: "MORE OPPORUNITY",
    },
    {
      backgroundImage: "/assets/images/car2.jpg",
      head: "PUT YOUR CAR ON SALE ",
      caption: "Caption for Car 2",
      button: "CREATIVE PROFILE",
    },
    {
      backgroundImage: "/assets/images/car3.jpg",
      head: "HEADING ",
      caption: "Caption for Car 3",
      button: "MORE OPPORUNITY",
    },
  ];

  return (
    <div>
      <Carousel
        fade
        activeIndex={currentIndex}
        onSelect={handleSelect}
        pause={true}
        interval={8000}
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-block w-100 carousel-home"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                className="carousel-caption d-flex flex-column justify-content-around "
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "20px",

                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                }}
              >
                <div className="">
                  <Button className="custom-button">{item.button}</Button>

                  <h1 className="carousel-head">{item.head}</h1>

                  <p className="carousel-p">{item.caption}</p>
                </div>
                <div className="tp-caption slider-thumb d-flex start container hidden-xs hidden-sm">
                  {cars.map((car) => (
                    <div className="col-md-4" key={car.id}>
                      <NavLink to="/vehicle">
                        <div className="thumb-item ">
                          <div className="top-content">
                            <span>{car.price}</span>
                            <div className="span-bg" />
                            <h2>{car.name}</h2>
                          </div>
                          <div className="down-content">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam
                            </p>
                            <img src={car.imageUrl} alt={car.name} />
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <img
              src={item.backgroundImage}
              style={{ display: "none" }}
              alt={`Preload ${item.caption}`}
              onLoad={handleImageLoad}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
