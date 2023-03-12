import React, { Component } from 'react';
import { Col, Row } from "reactstrap";

class ServiceBox extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                        <Col lg="6" className="mt-3 service-card" key={key}>
                            <Row className="clearfix p-4" data-aos="fade-up">
                                <Col lg="6" className="service-img">
                                    <img src={service.icon} alt="" />
                                </Col>
                                <Col lg="6" className="service-desc service-left">
                                    <h5>{service.title}</h5>
                                    <small className="text-muted mb-0 text-center">{service.description}</small>
                                </Col>
                            </Row>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ServiceBox;