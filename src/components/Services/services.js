import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import { GiMiner } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";
import { GiTowTruck } from "react-icons/gi";
import { FaBusAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";
import { SiSpringsecurity, SiWikimediacommons } from "react-icons/si";
import { TbTruckLoading } from "react-icons/tb";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";


//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";
import Agriculture from "../../assets/images/services/agriculture.jpg";
import chemical from "../../assets/images/services/chemical.jpg";
import construction from "../../assets/images/services/construction.jpg";
import it from "../../assets/images/services/it.jpg";
import transportation from "../../assets/images/services/transportation.jpg";

class Services extends Component {

    state = {
        services: [
            // { title: "Mining", icon: GiMiner, description: "We global demand for food, the goal of agriculture and food security is to support innovation for future   ancient and sustainable agriculture production." },
            { title: "Chemical Manifacture", icon: chemical, description: "Manufactures of pesticides, cleaning detergent and spirit supplying to over 1500 farmers seek  investment or a community ( investors agriculture products and services)." },
            { title: "Agriculture", icon: Agriculture, description: "With global demand for food, the goal of agriculture and food security is to support innovation for future ecient and sustainable agricultural production " },
            { title: "Construction (Mining)", icon: construction, description: "Palm Tree Investment services is entitled to facilitate the extraction of metals and minerals through investment project in the Democratic Republic of the Congo.The social and labor plan also includes the infrastructure development and better lives." },
        ],
        services1: [
            { title: "IT Infrastructure & development", icon: it, description: "This area will focus more on supplying information technology accessories and doing maintenance when needed " },
            { title: "Transportation & logistics", icon: transportation, description: "Palm Tree Investment Services will focus on creating a transformation and sustainable cars, busses, coach and trucks for transportation in Africa." },
            { title: " Water and sanitation", icon: GiWaterTank, description: "Palm Tree Investment Services is committed to addressing the ongoing challenges associated with the lack of clean water, sanitation and good hygiene." },
        ],
        services2: [
            { title: "Securities & Cleaning", icon: SiSpringsecurity, description: "As companies primarily engaged in providing security guard, patrol services, riot guard  body guard, Many of them will even provide advanced special operation services if the client  demands it.  Cleaning:clean, Disinfects and maintain the premises of private households or commercial buildings  and public areas. " },
            { title: "Casting", icon: SiWikimediacommons, description: "We provide constant liaison between the client and the actors or extras, finding suitable people and ensuring that contracts are issued, fees are paid and all health & safety requirements met." },

        ],

    }
    render() {
        return (
            <React.Fragment>
                <section id="service" className="section">
                    <Container>
                        <SectionTitle title1="Our" title2="Services" />
                        <Row className="pt-4 mt-4">
                            <ServiceBox services={this.state.services} />
                        </Row>
                        <Row>
                            <ServiceBox services={this.state.services1} />
                        </Row>
                        <Row>
                            <ServiceBox services={this.state.services2} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;