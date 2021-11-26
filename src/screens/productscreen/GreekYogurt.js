import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import plain from "../../assets/products/GREECANIA Yogurt, Plain 125ml.png";
import honey from "../../assets/products/GREECANIA Yogurt, Honey 105ml.png";
import choco from "../../assets/products/GREECANIA Yogurt, Choco 105ml.png";
import strawberry from "../../assets/products/GREECANIA Yogurt, Straw 105ml.png";
import mango from "../../assets/products/GREECANIA Yogurt, Mango 105ml.png";

const GreekYogurt = () => {
  return (
    <div className="our-products">
      <section className="pageBanner">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">greek yogurt</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Container className="greekYogurtPlain">
          <Row className="mt-5">
            <Col md={6}>
              <img src={plain} />
            </Col>
            <Col md={6}>
              <h2>Nature Plain</h2>
              <ul>
                <li>MRP - ₹ 70.0</li>
                <li>Net Weight - 125ml | Unit - 16</li>
                <li>Shelf Life - 15 Days</li>
                <li>Storage Conditions - Store at 4OC or below </li>
              </ul>
              <p>
                Greek Yogurt has a rich creamy texture, tastes sweet without the
                addition of sugar and is known for its probiotic properties. It
                is a complete package with the goodness of yogurt and the
                satisfaction of dessert. It will always be a refreshing snack;
                be it at home or at work."
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="greekYogurtHoney mt-5">
          <Row>
            <Col md={6}>
              <img src={honey} />
            </Col>
            <Col md={6}>
              <h2>With Honey</h2>
              <ul>
                <li>MRP - ₹ 70.0</li>
                <li>Net Weight - 125ml | Unit - 16</li>
                <li>Shelf Life - 15 Days</li>
                <li>Storage Conditions - Store at 4OC or below </li>
              </ul>
              <p>
                This is for those family members with an extra sweet tooth while
                caring for their health. Honey adds sweetness to yogurt without
                disturbing the body glucose level.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="greekYogurtChoco mt-5">
          <Row>
            <Col md={6}>
              <img src={choco} />
            </Col>
            <Col md={6}>
              <h2>With Choco Chips</h2>
              <ul>
                <li>MRP - ₹ 70.0</li>
                <li>Net Weight - 125ml | Unit - 16</li>
                <li>Shelf Life - 15 Days</li>
                <li>Storage Conditions - Store at 4OC or below </li>
              </ul>
              <p>
                People are crazy about this inversion, it is chocolaty, crunchy
                combined with soft and thick greek yogurt without affecting the
                PH level of yogurt, that's why nobody says no to a little extra
                choco chips.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="greekYogurtStrawberry mt-5">
          <Row>
            <Col md={6}>
              <img src={strawberry} />
            </Col>
            <Col md={6}>
              <h2>With Strawberry</h2>
              <ul>
                <li>MRP - ₹ 70.0</li>
                <li>Net Weight - 125ml | Unit - 16</li>
                <li>Shelf Life - 15 Days</li>
                <li>Storage Conditions - Store at 4OC or below </li>
              </ul>
              <p>
                The nutrients of greek yogurt like high protein, calcium,
                strengthen the immune system. Strawberry has a fresh taste along
                with Vitamin C and antioxidants.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="greekYogurtMango mt-5 mb-5">
          <Row>
            <Col md={6}>
              <img src={mango} />
            </Col>
            <Col md={6}>
              <h2>With Mango</h2>
              <ul>
                <li>MRP - ₹ 70.0</li>
                <li>Net Weight - 125ml | Unit - 16</li>
                <li>Shelf Life - 15 Days</li>
                <li>Storage Conditions - Store at 4OC or below </li>
              </ul>
              <p>
                Almost every person loves mango because of its flavor and
                delicious taste. Mango yogurt is not only delicious but also
                contains amino acids, beta carotene & many soluble and insoluble
                fibers that keep you healthy and fit.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GreekYogurt;
