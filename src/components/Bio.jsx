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
            <button className="btn-edit">Edit profile</button>
            <div className="flex-reverse">
              <div className="follow-count">
                <a href="https://github.com/Taofeeq-deru?tab=followers">
                  <ion-icon name="people-outline"></ion-icon> <span>8</span>{" "}
                  followers
                </a>
                <b>·</b>
                <a href="https://github.com/Taofeeq-deru?tab=following">
                  <span>9</span> following
                </a>
                <b>·</b>
                <a href="https://github.com/Taofeeq-deru?tab=stars">
                  <i className="far fa-star"></i> <span>1</span>
                </a>
              </div>
              <div className="contacts">
                <span className="pc-only">
                  <ion-icon name="location-outline"></ion-icon> <p>Lagos</p>
                </span>
                <span>
                  <i className="far fa-envelope"></i>{" "}
                  <a href="mailto:oluderu">oluderutaofeeq@gmail.com</a>
                </span>
                <span>
                  <i className="fas fa-link"></i>{" "}
                  <a href="https://taofeeq-deru.herokuapp.com">
                    https://taofeeq-deru.herokuapp.com
                  </a>
                </span>
                <span className="pc-only">
                  <ion-icon name="logo-twitter"></ion-icon>{" "}
                  <a href="https://twitter.com/taofeeq_deru">@taofeeq_deru</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bio;
