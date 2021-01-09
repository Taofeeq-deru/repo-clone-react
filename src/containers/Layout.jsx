import React, { Component } from "react";
import { Nav, RepoPage, Footer } from "../components";
//import axios from "axios";

class Layout extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <div id="content">
          <RepoPage />
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Layout;
