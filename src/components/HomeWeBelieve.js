import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import madeWithLove from "../assets/made-with-love.png";
import tasty from "../assets/tasty.png";
import lovable from "../assets/lovable.png";

const HomeWeBelieve = () => {
  return (
    <div>
      <>
        <Container className="weBelieve">
          <Row className="text-center">
            <h1>we believe in</h1>
          </Row>
          <Row className="text-center">
            <Col md={4} className="mb-5">
              <div className="weBelieveSection">
                <img src={lovable} />
                <h2>Lovable Products</h2>
                <p>Authentic products by the greeks</p>
              </div>
            </Col>
            <Col md={4} className="mb-5">
              <div className="weBelieveSection">
                <img src={tasty} />
                <h2>Fresh & Tasty</h2>
                <p>Only the freshest ingredients</p>
              </div>
            </Col>
            <Col md={4} className="mb-5">
              <div className="weBelieveSection">
                <img src={madeWithLove} />
                <h2>Made With Love</h2>
                <p>Prepared with care for our clients</p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default HomeWeBelieve;
