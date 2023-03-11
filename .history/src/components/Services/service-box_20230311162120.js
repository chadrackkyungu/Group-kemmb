import React, { Component } from 'react';
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
class ServiceBox extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                        <Col lg="6" className="mt-3" key={key}>
                            <div className="service-box clearfix p-4">
                                <div className="icon-container mb-4">
                                    <div className="service-icon service-left  text-center"> <service.icon /> </div>
                                </div>
                                <div className="service-desc service-left">
                                    <h4>{service.title}</h4>
                                    <p className="text-muted mb-0 text-center">{service.description}</p>

                                </div>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ServiceBox;