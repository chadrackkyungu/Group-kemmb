import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Footer from "../../components/Footer/footer";
import Features from "../../components/Features/features";
import GetStarted from "../../components/Get Started/get-started";
import Services from "../../components/Services/services";
import Clients from "../../components/Clients/clients";
import OurTeam from "../../components/Team/our-team";
import Pricing from "../../components/Pricing/pricing";
import GetInTouch from "../../components/Get in Touch/get-in-touch";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;

    if (scrollup > this.state.pos) {
      this.setState({ navClass: "darkheader", imglight: false });
    } else if (window.innerWidth <= 768) {
      this.setState({ navClass: "darkheader", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavbarPage
          navclass={this.state.navClass}
          imglight={this.state.imglight}
        />
        <Section />
        <Features />
        <GetStarted />
        <Services />
        <OurTeam />
        <GetInTouch />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
