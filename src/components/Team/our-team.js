import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/team-1.png";
import team2 from "../../assets/images/team/team-2.png";
import team3 from "../../assets/images/team/team-3.png";
import team4 from "../../assets/images/team/team-4.png";

class OurTeam extends Component {
    state = {
        members : [
            { id : 1, name : "Jean Charles B. Kashama", image : team1, post : "Operation Director",
                socials : [
                    { class : "mdi mdi-instagram", link : "#" },
                ]
            },
            { id : 2, name : "Kyungu Chadrack", image : team2, post : "Web Developper",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-instagram", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 3, name : "Kaba Mechack", image : team3, post : "Financial Director",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-instagram", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 4, name : "Kimubulu Esino", image : team4, post : "Marketing Director",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-instagram", link : "#" },
                    { class : "mdi mdi-whatsapp", link : "#" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
        <section className="section" id="team">
            <Container>
                <SectionTitle title1="Our" title2="Team" />
                <Row className="mt-4 pt-4">
                    <TeamBox members={this.state.members} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;