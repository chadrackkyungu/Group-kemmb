import React, { Component } from 'react';
import { Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import logolight from "../../assets/images/bg.jpg";
class ServiceBox extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                        <Col lg="6" className="mt-3" key={key}>
                            {/* <Row className="service-box clearfix p-4"> */}
                            <Row className="clearfix p-4">
                                <Col lg="6" className="icon-container mb-4 service-img">
                                    {/* <div className="service-icon service-left  text-center"> <service.icon /> </div> */}
                                    <img src={logolight} alt="" />
                                </Col>
                                <Col lg="6" className="service-desc service-left">
                                    <h5>{service.title}</h6>
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