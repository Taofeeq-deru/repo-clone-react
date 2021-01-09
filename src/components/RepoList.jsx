import React, { Component } from "react";
import { Repo } from "./index";

class RepoList extends Component {
  state = {
    type: false,
    lang: false,
  };

  toggleDetails(e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-dd");
    const { type, lang } = this.state;
    if (!type && !lang) {
      id === "type"
        ? this.setState({ ...this.state, type: true, lang: false })
        : this.setState({ ...this.state, lang: true, type: false });
    } else {
      this.setState({ ...this.state, type: false, lang: false });
    }
  }

  closeDetails() {
    this.setState({ ...this.state, type: false, lang: false });
  }
  render() {
    const { type, lang } = this.state;
    return (
      <>
        <div className="search-repo">
          <input
            type="search"
            name="find-repo"
            id="find-repo"
            className="find-repo"
            placeholder="Find a repository..."
          />
          <div className="details">
            <details open={type}>
              <summary onClick={(e) => this.toggleDetails(e)} data-dd="type">
                <span data-dd="type">Type:</span>&nbsp;All
                <i className="fas fa-caret-down" data-dd="type"></i>
              </summary>
              <div className="menu">
                <div className="details-menu">
                  <p className="title">
                    Select type
                    <span
                      className="close-detail"
                      role="button"
                      onClick={() => this.closeDetails()}>
                      &times;
                    </span>
                  </p>
                  <div className="menu-list">
                    <p>
                      <i className="fas fa-check"></i> All
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> Sources
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> Forks
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> Archived
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> Mirrors
                    </p>
                  </div>
                </div>
              </div>
            </details>
            <details className="lang" open={lang}>
              <summary onClick={(e) => this.toggleDetails(e)} data-dd="lang">
                <span data-dd="lang">Language:</span>&nbsp;All
                <i className="fas fa-caret-down" data-dd="lang"></i>
              </summary>
              <div className="menu">
                <div className="details-menu">
                  <p className="title">
                    Select language
                    <span
                      className="close-detail"
                      role="button"
                      onClick={() => this.closeDetails()}>
                      &times;
                    </span>
                  </p>
                  <div className="menu-list">
                    <p>
                      <i className="fas fa-check"></i> All
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> JavaScript
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> SCSS
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> HTML
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> PHP
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> Python
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> TypeScript
                    </p>
                    <p>
                      <i className="fas fa-check inactive"></i> CSS
                    </p>
                  </div>
                </div>
              </div>
            </details>
            <button className="btn-new">
              <svg height="13px" width="13px" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                />
              </svg>
              New
            </button>
          </div>
        </div>
        <div className="repo-list" id="repoList">
          <Repo />
        </div>
        <div className="buttons">
          <button className="btn-prev">Previous</button>
          <button className="btn-next">Next</button>
        </div>
      </>
    );
  }
}

export default RepoList;
