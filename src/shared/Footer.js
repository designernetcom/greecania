import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from ".././greecania-logo.png";
import facebook from "../assets/facebook-logo.png";
import linkedin from "../assets/linkedin-logo.png";
import instagram from "../assets/instagram-logo.png";
import twitter from "../assets/twitter-logo.png";

const Footer = () => {
  return (
    <div>
      <>
        <section className="footer">
          <Container>
            <Row>
              <Col md={4}>
                <a href="">
                  <img src={logo} width="80%" />
                </a>
              </Col>
              <Col md={4}>
                <h4>Reach US</h4>
                <div className="reachUs">
                  <i class="fas fa-phone-square-alt"></i>{" "}
                  <span className="phone"> Phone Number</span>
                  <br />
                  <a href="919922964166"> +91 99229 64166</a> <br />
                  <a href="tel:918669920784"> +91 86699 20784</a>
                  <br />
                  <br />
                </div>
                <div className="reachUs">
                  <i class="fas fa-envelope-square"></i>{" "}
                  <span className="email"> Email Id</span> <br />
                  <a href="connect@greecania.com">connect@greecania.com</a>
                </div>
              </Col>
              <Col md={4}>
                <h4>Locate Us</h4>
                <div className="mb-3">
                  <a href="https://goo.gl/maps/y41CafyhfcK6egb98">
                    <i class="fas fa-location-arrow fa-3x"></i>{" "}
                  </a>
                </div>
                <div className="followUs">
                  <h5>Follow Us</h5>

                  <a href="https://www.linkedin.com/company/greecania">
                    <img src={linkedin} />
                  </a>

                  <a href="https://www.instagram.com/greecania/">
                    <img src={instagram} />
                  </a>

                  <a href="https://www.facebook.com/greecania">
                    <img src={facebook} />
                  </a>

                  <a href="https://twitter.com/greecania?s=11">
                    <img src={twitter} />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="copyRight">
          <Container>
            <Row className="text-center">
              <Col md="12">
                <p className="pt-3">
                  Copyrights &copy; Greecania. All Rights Reserved. Design &
                  Developed by{" "}
                  <a href="https://netcom-india.com/">
                    Netcom Business Solutions Pvt. Ltd.
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </div>
  );
};

export default Footer;
