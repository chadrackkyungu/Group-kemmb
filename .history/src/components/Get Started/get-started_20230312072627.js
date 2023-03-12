import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import emailjs from "emailjs-com";

function GetStarted() {



  return (
    <React.Fragment>
      <section className="pt-5 pb-5 bg-custom-get-started">
        <Container>
          <Row>
            <Col md="9" className="text-white critarea-desc mt-3 mb-3" data-aos="fade-left">
              Become a part of Palm tree Investment Service today
            </Col>
            <Col md="3" className="mt-3 mb-3 text-md-right">
              <a href="#contact" className="btn btn-outline-custom" data-aos="fade-right">
                Get in touch
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}


export default GetStarted;
