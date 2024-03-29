import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLinks from "./footer-links";
import logolight from "../../assets/images/logo.png";

class Footer extends Component {
    state = {
        footerItems: [
            {
                title: "Menus",
                links: [
                    { linkTitle: "Home", link: "#home" },
                    { linkTitle: "About", link: "#about" },
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
                            <Col lg="4">
                                <div className="logo-light ">
                                    <img src={logolight} alt="" height="100" />
                                </div>
                            </Col>
                            {/* {
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
                            } */}

                            <Col lg="8">
                                <p className="text-uppercase footer-title">Contact Us</p>
                                <div className="contact-us">
                                    <p>info@palmtree.com</p>
                                    <p> CALL AND WHATSAPP +27 61 983 6863 </p>
                                    <p> </p>
                                    <p>Palm Tree Investment services (pty) Ltd Reg No 2023/517568/07</p>
                                    <p>Address: 31 Becker Street Yeoville, Johannesburg, Gauteng, south Africa</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <FooterLinks />
            </React.Fragment>
        );
    }
}

export default Footer;