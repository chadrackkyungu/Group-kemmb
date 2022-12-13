import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Images
import img1 from "../../assets/images/features/about.jpg";
import img2 from "../../assets/images/features/eye2.jpg";
import img3 from "../../assets/images/features/go.jpg";
import img4 from "../../assets/images/features/ne.jpg";
import FeatureBox from "../common/feature-box";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container className="">
            <SectionTitle title1="About" title2="Us" />
            <Row className="feature-container pb-5 mt-4 pt-4 vertical-content">
              <Col lg="6" className="feature__content mt-2 ">
                <div className="feat mb-5 mb-lg-0">
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class="text-lg-left"
                  title="Introduction to Group Maka Investment Services"
                  desc="GROUP MAKA INVESTMENT SERVICES is a company that bridges the gaps between investors in 
                  the world and the Democratic republic of Congo with focus in Agriculture, Construction, mining, 
                  transportation & Logistics, Water and sanitation, IT Infrastructure, Securities & Cleaning, Logistics, Casting and Chemical Manifacture"
                  link="#"
                />
              </Col>

            </Row>
            <Row className="feature-container pb-5 mt-5 vertical-content">
              <Col lg="6" className=" feature__content mt-2">
                <div className="feat mb-5 mb-lg-0">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid mx-auto d-block "
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2">
                <FeatureBox
                  class="text-center text-lg-left "
                  title="Our Vision "
                  desc="Our goal is to contribute to economic growth in the 
                  democratic republic of Congo and the prosperity of its 
                  people 
                  We will achieve this by increasing investors opportunities 
                  and employment strengthening rural development and 
                  alleviating poverty"
                  link="#"
                />
              </Col>
            </Row>
            <Row className="feature-container pb-5 mt-4 pt-4 vertical-content">
              <Col lg="6" className="feature__content mt-2">
                <div className="feat mb-5 mb-lg-0 ">
                  <img
                    src={img3}
                    alt=""
                    className=" img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class="text-lg-left"
                  title="Our Value"
                  desc="Our values are the heart of our business. Every decision we 
                  make and action we take is aligned to these core 
                  philosophies. It’s what makes us unique and capable of 
                  achieving great things"
                  link="#"
                />
              </Col>
            </Row>
            <Row className="feature-container pb-5 mt-5 vertical-content">
              <Col lg="6" className="mt-2">
                <div className="feat mb-5 mb-lg-0 ">
                  <img
                    src={img4}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="feature__content mt-2">
                <FeatureBox
                  class="text-center text-lg-left"
                  title="Our Value"
                  desc="Africa is a business landscape founded on relationships and connections. This means getting to know our 
                  partners and finding out how we can work together to achieve our mutual goals. We care about others and the 
                  impact our actions have on our stakeholders. It’s not just about what we do, it’s the spirit in which we do it"
                  link="#"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
