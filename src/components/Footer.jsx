import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer>
          <div className="footer-links">
            <p>&copy; 2020 GitHub, Inc.</p>
            <p className="link">Terms</p>
            <p className="link">Privacy</p>
            <p className="link">Security</p>
            <p className="link">Status</p>
            <p className="link">Help</p>
            <p className="pc-only">
              <i className="fab fa-github"></i>
            </p>
            <p className="link">Contact GitHub</p>
            <p className="link">Pricing</p>
            <p className="link">API</p>
            <p className="link">Training</p>
            <p className="link">Blog</p>
            <p className="link">About</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
