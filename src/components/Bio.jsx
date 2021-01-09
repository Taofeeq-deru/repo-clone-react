import React, { Component } from "react";

class Bio extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.topRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const sticky = this.topRef.current.offsetTop;
    const bioName = document.querySelector("#bio-name");
    const tabName = document.querySelector("#tab-name");
    if (window.pageYOffset >= sticky) {
      tabName.style.visibility = "visible";
      bioName.style.visibility = "hidden";
    } else {
      tabName.style.visibility = "hidden";
      bioName.style.visibility = "visible";
    }
  };

  render() {
    const {
      avatarUrl,
      bio,
      email,
      name,
      login,
      followers,
      following,
      location,
      twitterUsername,
      websiteUrl,
      stars,
    } = this.props.data;
    return (
      <>
        <div className="bio-container">
          <div className="bio">
            <div className="avi-names">
              <div className="avi">
                <img
                  src={avatarUrl}
                  alt={login}
                  className="avatar my-avi"
                  loading="lazy"
                />
                <div className="set-status-pc">
                  <i className="far fa-smile"></i>
                  <p>Set status</p>
                </div>
              </div>
              <div className="names" id="bio-name">
                <h1 className="my-fullname">{name}</h1>
                <h2 className="my-username">{login}</h2>
              </div>
            </div>
            <div className="set-status">
              <i className="far fa-smile"></i>
              <p>Set status</p>
            </div>
            <div className="desc">
              <p id="bio-desc" ref={this.topRef}>
                {bio}
              </p>
            </div>
            <button className="btn-edit">Edit profile</button>
            <div className="flex-reverse">
              <div className="follow-count">
                <a href="https://github.com/Taofeeq-deru?tab=followers">
                  <ion-icon name="people-outline"></ion-icon>{" "}
                  <span>{followers}</span> followers
                </a>
                <b>·</b>
                <a href="https://github.com/Taofeeq-deru?tab=following">
                  <span>{following}</span> following
                </a>
                <b>·</b>
                <a href="https://github.com/Taofeeq-deru?tab=stars">
                  <i className="far fa-star"></i> <span>{stars}</span>
                </a>
              </div>
              <div className="contacts">
                <span className="pc-only">
                  <ion-icon name="location-outline"></ion-icon>{" "}
                  <p>{location}</p>
                </span>
                <span>
                  <i className="far fa-envelope"></i>{" "}
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
                <span>
                  <i className="fas fa-link"></i>{" "}
                  <a href={websiteUrl}>{websiteUrl}</a>
                </span>
                <span className="pc-only">
                  <ion-icon name="logo-twitter"></ion-icon>{" "}
                  <a href={`https://twitter.com/${twitterUsername}`}>
                    @{twitterUsername}
                  </a>
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
