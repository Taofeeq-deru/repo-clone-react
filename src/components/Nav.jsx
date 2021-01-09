import React, { Component } from "react";
import avi from "../avatar.jpg";

class Nav extends Component {
  state = { profile: false, repo: false };

  toggleNav() {
    document.querySelector("#mobile-nav").classList.toggle("show");
  }

  toggleDropdown(e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-dd");
    const { repo, profile } = this.state;
    if (!repo && !profile) {
      id === "repo-dd"
        ? this.setState({ repo: true, profile: false })
        : this.setState({ repo: false, profile: true });
    } else {
      this.setState({ repo: false, profile: false });
    }
  }

  render() {
    const { repo, profile } = this.state;
    return (
      <>
        <nav className="nav">
          <div className="mob-view">
            <ion-icon
              name="menu-outline"
              size="large"
              onClick={() => this.toggleNav()}></ion-icon>
            <p className="link">
              <i className="fab fa-github"></i>
            </p>
            <p className="link">
              <i className="far fa-bell"></i>
            </p>
          </div>
          <div className="pc-view">
            <p className="link">
              <i className="fab fa-github"></i>
            </p>
            <div className="search-group">
              <input
                type="search"
                name="search"
                id="pc-search"
                className="nav-search"
                placeholder="Search or jump to..."
              />
              <div className="slash">
                <span>/</span>
              </div>
            </div>
            <p className="link nav-link"></p>
            <p className="link nav-link">Issue</p>
            <p className="link nav-link">Marketplace</p>
            <p className="link nav-link">Explore</p>
            <div className="end">
              <p className="link nav-link-end">
                <i className="far fa-bell"></i>
              </p>
              <div
                className="nav-link-end dd-toggler"
                data-dd="repo-dd"
                onClick={(e) => this.toggleDropdown(e)}>
                <ion-icon name="add-outline" data-dd="repo-dd"></ion-icon>{" "}
                <i className="fas fa-caret-down" data-dd="repo-dd"></i>
              </div>
              <div
                className="nav-link-end dd-toggler"
                data-dd="profile-dd"
                onClick={(e) => this.toggleDropdown(e)}>
                <img
                  src={avi}
                  alt=""
                  className="avi my-avi"
                  data-dd="profile-dd"
                />
                <i className="fas fa-caret-down" data-dd="profile-dd"></i>
              </div>
            </div>
          </div>
        </nav>
        <div id="repo-dd" className={`dropdown ${repo ? "show" : ""}`}>
          <div className="triangle"></div>
          <div className="dd-menu">
            <p className="link">New repository</p>
            <p className="link">Import repository</p>
            <p className="link">New gist</p>
            <p className="link">New organization</p>
            <p className="link">New project</p>
          </div>
        </div>
        <div id="profile-dd" className={`dropdown ${profile ? "show" : ""}`}>
          <div className="triangle"></div>
          <div className="dd-menu">
            <p className="link signed-in">
              Signed in as <br />
              <span>Taofeeq-deru</span>
            </p>
            <div className="status-box">
              <div className="set-status">
                <i className="far fa-smile"></i>
                <p>Set status</p>
              </div>
            </div>
            <div className="profile-links">
              <p className="link">Your profile</p>
              <p className="link">Your repositories</p>
              <p className="link">Your organisations</p>
              <p className="link">Your projects</p>
              <p className="link">Your stars</p>
              <p className="link">Your gists</p>
            </div>
            <div className="others">
              <p className="link">Upgrade</p>
              <p className="link">Feature preview</p>
              <p className="link">Help</p>
              <p className="link">Settings</p>
              <p className="link">Sign out</p>
            </div>
          </div>
        </div>
        <div className="mob-nav" id="mobile-nav">
          <input
            type="search"
            name="search"
            id="mob-search"
            className="nav-search"
            placeholder="Search"
          />
          <ul>
            <li>Dashboard</li>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
            <li>Settings</li>
            <li>
              <img src={avi} alt="" className="avi my-avi" loading="lazy" />
              &nbsp;
              <span className="my-username">Taofeeq-deru</span>
            </li>
            <li>
              <i className="fas fa-sign-out-alt"></i>&nbsp; Sign out
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
