import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
    state = {
        footerItems: [
            {
                title: "Group Maka",
                links: [
                    { linkTitle: "Home", link: "#home" },
                    { linkTitle: "Features", link: "#" },
                    { linkTitle: "Services", link: "#service" },
                    { linkTitle: "Team", link: "#team" },
                    { linkTitle: "Contact", link: "#contact" },
                ]
            },

        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row className="Group-maka">
                            {
                                this.state.footerItems.map((item, key) =>
                                    <Col lg="2" key={key}>
                                        <p className="text-uppercase footer-title">{item.title}</p>
                                        <ul className="list-unstyled company-sub-menu">
                                            {
                                                item.links.map((fLink, key) =>
                                                    <li key={key}><Link to={fLink.link}>{fLink.linkTitle}</Link></li>
                                                )
                                            }
                                        </ul>
                                    </Col>
                                )
                            }

                            <Col lg="3">
                                <p className="text-uppercase footer-title">Contact Us</p>
                                <div className="contact-us">
                                    <p>info@groupMaka.com</p>
                                </div>
                                {/* <ul className="footer-icons list-inline mt-4">
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-facebook"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-twitter"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-instagram"></i></Link></li>
                                </ul> */}

                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Render footer links */}
                <FooterLinks />
            </React.Fragment>
        );
    }
}

export default Footer;