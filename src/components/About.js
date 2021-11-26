import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../assets/aboutimage.jpg";
import teamImage from "../assets/team.jpg";
import missionImage from "../assets/mission-final.png";
import visionImage from "../assets/vision-final.png";

const About = () => {
  return (
    <div>
      <Container className="aboutPage">
        <Row>
          <Col md={6}>
            <h1 className="text-center pb-2">
              About <span>Greecania</span>
            </h1>
            <p>
              Introducing Greecania; Greek in India. The range of authentic
              Greek ice creams, authentic Greek yogurt desserts, authentic Greek
              flavored yogurts, authentic Greek puddings, and some more exciting
              products in the range to fulfill your daily dietary and
              nutritional essentials with an astonishing taste of Greece.
            </p>
            <p>
              Our company is inspired by the age-old traditional ways, based on
              unique and original recipes combined from the genuine Greek
              origin. To date, the company has been manufacturing products made
              from sheep milk but it was on exploring the international market
              when we found that the products tasted well and were made of
              better quality with the use of Cow milk. India is a highly
              populated country where the production and consumption of dairy
              products are on a high level. Hence we decided to establish our
              new venture in India by the name of GREECANIA; a perfect blend of
              the Greek flavors to tickle the Indian taste buds.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <img src={aboutImage} width="100%" />
          </Col>
        </Row>
      </Container>
      <Container className="missionVision mt-5">
        <Row className="text-center">
          <Col md={6}>
            <div className="vision">
              <div>
                <img src={visionImage} width="20%" className="mb-3" />
              </div>
              <h3>VISION</h3>
              <p>
                We want to introduce the heritage of greek food culture to
                Indian consumers and beyond.
                <br />
                <br />
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mission">
              <div>
                <img src={missionImage} width="20%" className="mb-3" />
              </div>
              <h3>MISSION</h3>
              <p>
                Building an eco system where the consumption of milk is not
                limited to curd and butter but leveraging the perporties of the
                segment to derive new possibilities everyday.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="temSection mb-3 mt-5">
        <Row>
          <Col md={6} className="mt-5">
            <img src={teamImage} width="100%" />
          </Col>
          <Col md={6}>
            <h1 className="text-center pb-2">
              Our <span> Team</span>
            </h1>
            <p>
              IThree crazy local Mykonian friends, one of which is the third
              generation cheesemaker who is passionate about cheese. He has
              knowledge of cheese making and is always ready to help you
              understand the basic principles of cheese making. Another one is
              also known as the Mad Scientist and the Alchemist as he does
              different experiments with ice-creams. The last one is the numbers
              guy, the one that makes sure everything goes according to the
              plan! He is the backbone for all the creative processes and
              production of Greecania.
            </p>
            <p>
              Our team Greecania is not just a profession but a passion. It is
              not just a team, they are enthusiasts, from the land of wind which
              has an aroma of milk flowing all over the island. This aroma holds
              a leading position in Mykonos, Greece in the field of dairy
              products. This is not just a business for us but a passion which
              we are carrying on for generations by serving a limited crowd of
              12,500 Mykonian’s. We produce and distribute not just dairy
              products such as milk, yogurt, and authentic cheeses for all age
              groups, from babies to seniors, but also chilled energy drinks,
              desserts, puddings, sauces, ketchup, Ice-creams etc.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
