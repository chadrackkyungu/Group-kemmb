import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Image
// import img1 from "../../assets/images/bg-home.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-home" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="row justify-content-center">
                                    <Col lg="10" className="text-center">
                                        <h6 className="home-title text-white">The only way to do great work is to love what you do</h6>
                                        <p className="pt-4 home-sub-title text-white mx-auto">
                                            Group Maka Services is an open-platform company that provides different types of services in order to contribute to the development of a better tomorrow for everyone.
                                        </p>
                                        <div className="watch-video pt-4">
                                            <Link to="#" onClick={this.callModal} className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Watch The Video!</span></Link>
                                        </div>
                                    </Col>
                                </Row>
                                {/* Render ModalSection Component for Modal */}
                                <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;