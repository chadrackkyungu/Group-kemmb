import React, { Component } from "react";
import "./footer.css";

class FooterLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-alt bg-dark">
          <p className="copy-rights">
            © Copyright 2024 build with love ❤️ by{" "}
            <a
              href="https://www.websitebuilders.dev"
              style={{ color: "black" }}
            >
              https://www.websitebuilders.dev
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterLinks;
