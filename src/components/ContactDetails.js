import React from "react";
import facebook from "../assets/facebook-logo.png";
import linkedin from "../assets/linkedin-logo.png";
import instagram from "../assets/instagram-logo.png";
import twitter from "../assets/twitter-logo.png";

const ContactDetails = () => {
  return (
    <div className="contactDetails">
      <h4 className="mb-5">Reach US</h4>
      <div>
        <i class="fas fa-phone-square-alt"></i>{" "}
        <span className="phone"> Phone Number</span>
        <br />
        <a href="tel:919922964166"> +91 99229 64166</a> <br />
        <a href="tel:918669920784"> +91 86699 20784</a>
        <br />
        <br />
      </div>
      <div className="reachUs">
        <i class="fas fa-envelope-square"></i>{" "}
        <span className="email"> Email Id</span> <br />
        <a href="connect@greecania.com">connect@greecania.com</a>
      </div>
      <div className="followUs mt-5">
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
    </div>
  );
};

export default ContactDetails;
