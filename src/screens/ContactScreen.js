import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import bannerImage from "../assets/banner-contact.jpg";

const ContactScreen = () => {
  return (
    <div>
      <div>
        <img src={bannerImage} width="100%" />
      </div>
      <Container className="contactPage mb-4">
        <Row>
          <Col md="6">
            <ContactDetails />
          </Col>
          <Col md="6">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactScreen;
