import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

const HomeAbout = () => {
  return (
    <div>
      <>
        <Container fluid className="abouUs">
          <Row>
            <Col md={6} className="mb-5">
              <div className="contentSection">
                <h1>
                  Welcome To <span>Greecania</span>
                </h1>
                <p>
                  Introducing Greecania; Greek in India. The range of authentic
                  Greek ice creams, authentic Greek yogurt desserts, authentic
                  Greek flavored yogurts, authentic Greek puddings, and some
                  more exciting products in the range to fulfill your daily
                  dietary and nutritional essentials with an astonishing taste
                  of Greece.
                </p>
                <p>
                  Our company is inspired by the age-old traditional ways, based
                  on unique and original recipes combined from the genuine Greek
                  origin. To date, the company has been manufacturing products
                  made from sheep milk but it was on exploring the international
                  market when we found that the products tasted well and were
                  made of better quality with the use of Cow milk. India is a
                  highly populated country where the production and consumption
                  of dairy products are on a high level. Hence we decided to
                  establish our new venture in India by the name of GREECANIA; a
                  perfect blend of the Greek flavors to tickle the Indian taste
                  buds
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-5">
              <div>
                <ReactPlayer url="https://youtu.be/N0wOPgzBipU" width="100%" />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default HomeAbout;
