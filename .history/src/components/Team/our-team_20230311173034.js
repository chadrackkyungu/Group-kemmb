import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team2 from "../../assets/images/team/team-2.png";
import team3 from "../../assets/images/team/team-3.png";
import team4 from "../../assets/images/team/team-4.png";

class OurTeam extends Component {
    state = {
        members: [
            {
                id: 1, name: "Jean Charles B. Kashama", image: team2, post: "& Founder", title: "CEO",
                socials: [
                    { class: "mdi mdi-facebook", link: "https://www.facebook.com/profile.php?id=100004476735888" },
                    { class: "mdi mdi-instagram", link: "https://www.instagram.com/cbnkashama/" },
                    // { class: "mdi mdi-twitter", link: "#" },
                ]
            },
            {
                id: 2, name: "Chadrack Kyungu ", image: team3, post: "Developer", title: "Project Manager",
                socials: [
                    { class: "mdi mdi-facebook", link: "https://www.facebook.com/chadrack.kyungu.7" },
                    { class: "mdi mdi-instagram", link: "https://www.instagram.com/chadrack_code/" },
                    { class: "mdi mdi-twitter", link: "https://twitter.com/chadrack_code" },
                ]
            },
            {
                id: 3, name: "Mechack Kaba ", image: team4, post: "Chemical Engineer", title: "",
                socials: [
                    { class: "mdi mdi-facebook", link: "#" },
                    { class: "mdi mdi-instagram", link: "#" },
                    { class: "mdi mdi-whatsapp", link: "#" },
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