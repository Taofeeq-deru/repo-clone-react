import React, { Component } from "react";
import avi from "../avatar.jpg";

class Bio extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="bio-container">
          <div className="bio">
            <div className="avi-names">
              <div className="avi">
                <img
                  src={avi}
                  alt=""
                  className="avatar my-avi"
                  loading="lazy"
                />
                <div className="set-status-pc">
                  <i className="far fa-smile"></i>
                  <p>Set status</p>
                </div>
              </div>
              <div className="names" id="bio-name">
                <h1 className="my-fullname">Taofeeq Oluderu</h1>
                <h2 className="my-username">Taofeeq-deru</h2>
              </div>
            </div>
            <div className="set-status">
              <i className="far fa-smile"></i>
              <p>Set status</p>
            </div>
            <div className="desc">
              <p id="bio-desc">
                Frontend developer with a little backend knowledge
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bio;
