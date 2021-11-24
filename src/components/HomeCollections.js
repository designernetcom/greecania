import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import yogurt from "../assets/yogurt-icon-1.png";
import iceCrean from "../assets/ice-cream-icon.png";
import pudding from "../assets/pudding-icon.png";
import fruitPreserve from "../assets/fruit-preserve-icon.png";
import fruitSpread from "../assets/fruit-spread-icon.png";
import sauces from "../assets/sauces-icon.png";
import drinkingWater from "../assets/drinking-water-icon.png";
import cheese from "../assets/cheese-icon.png";
import collectionBG from "../assets/collections.jpg";

const HomeCollections = () => {
  return (
    <div
      className="our-collections"
      // style={{
      //   backgroundImage: "url(" + collectionBG + ")",
      //   backgroundSize: "auto",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <>
        <Container>
          <Row className="text-center mb-5">
            <h1>Our Collections</h1>
            <p>Pull Up A Chair. Take A Taste.</p>
            <p>Come Join Us.</p>
            <p>Life Is So Endlessly Delicious</p>
          </Row>
        </Container>
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={yogurt} /> <span>Greek Yogurt</span>
                </a>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={iceCrean} /> <span>Ice-Cream</span>
                </a>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={pudding} /> <span>Pudding</span>
                </a>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={fruitPreserve} /> <span>Fruit Preserve</span>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={fruitSpread} /> <span>Fruit Spread</span>
                </a>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={sauces} /> <span>Sauces</span>
                </a>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={drinkingWater} /> <span>Drinking Water</span>
                </a>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <div className="contentSection">
                <a href="">
                  <img src={cheese} /> <span>Cheese</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default HomeCollections;
