import React from "react";
import { Carousel } from "react-bootstrap";
import bannerFirst from "../assets/slide-1.jpg";
import bannerSecond from "../assets/slide-2.jpg";

const HomeCarousel = () => {
  return (
    <div className="HomeCarousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={bannerFirst}
            width="100%"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={bannerSecond}
            width="100%"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
