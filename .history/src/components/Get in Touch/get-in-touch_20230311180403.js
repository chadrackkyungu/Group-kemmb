import React, { useRef } from "react";
import { Container, Row, Col, FormGroup, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Animated } from "react-animated-css";
import "./Get in touch.css"
import emailjs from '@emailjs/browser';

//Import Section Title
import SectionTitle from "../common/section-title";

function GetInTouch() {

  const form = useRef();

  const handleValidSubmit = (e, values) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <React.Fragment>
      <section className="section " id="contact">
        <Container>
          <SectionTitle title1="Get In" title2="Touch" />
          <div className="custom-form mt-4 pt-4">
            <AvForm
              name="contact-form"
              id="contact-form"
              ref={form}
              onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

              <Row className="Get-in-touch">
                <Col md="6">
                  <FormGroup>
                    <Label for="email">Phone number</Label>
                    <AvField
                      name="email"
                      placeholder="Phone number..."
                      type="email"
                      errorMessage="Enter valid Email Address"
                      className="form-control"
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label for="email">Email address</Label>
                    <AvField
                      name="email"
                      placeholder="Your email..."
                      type="email"
                      errorMessage="Enter Valid Email Adress"
                      className="form-control"
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label for="comments">Message</Label>
                    <AvField
                      type="textarea"
                      name="comments"
                      id="comments"
                      rows="4"
                      className="form-control"
                      errorMessage="Enter your message."
                      placeholder="Your message..."
                      validate={{ required: { value: true } }}
                    />
                  </FormGroup>
                </Col>
              </Row>


              <Row>
                <div className="btn-center">
                  <Col sm="12" >
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="submitBnt btn btn-primary btn-custom"
                      value="Send Message"
                    />
                    <div id="simple-msg"></div>
                  </Col>
                </div>
              </Row>
            </AvForm>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}


export default GetInTouch;
