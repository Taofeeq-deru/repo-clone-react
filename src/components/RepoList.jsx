import React, { Component } from "react";
import { Repo } from "./index";

class RepoList extends Component {
  state = {
    type: false,
    lang: false,
    pages: "",
    current: "",
    perPage: {},
    repos: [],
    mssg: null,
  };

  componentDidMount() {
    this.checkProps();
  }

  checkProps() {
    if (this.props.total > 0) {
      this.getPages();
    } else {
      setTimeout(() => {
        this.checkProps();
      }, 500);
    }
  }

  getPages() {
    let start = 0;
    let pages = 1;
    let perPage = [];
    const { repos, total } = this.props;
    if (total > 30) {
      pages = Math.ceil(total / 30);
    }
    console.log(pages);
    for (let id = 1; id <= pages; id++) {
      let end = start + 30;
      let pageData = repos.slice(start, end);
      start = end;
      perPage.push({ id, pageData });
    }
    const data = perPage.find((per) => per.id === 1);
    this.setState({
      ...this.state,
      pages,
      perPage,
      repos: data.pageData,
      current: 1,
    });
  }

  changePage(e) {
    const page = e.target.getAttribute("data-page");
    const { current, perPage } = this.state;
    let newPage;
    if (page === "next") {
      newPage = current + 1;
    } else {
      newPage = current - 1;
    }
    const data = perPage.find((per) => per.id === newPage);
    this.setState({ ...this.state, current: newPage, repos: data.pageData });
    window.scrollTo(0, 0);
  }

  changeLanguage(e) {
    const lang = e.target.getAttribute("data-lang");
    const { repos } = this.props;
    const data = repos.filter(
      (per) => per.primaryLanguage && per.primaryLanguage.name === lang
    );
    console.log(data);
    const mssg = `${data.length} results for repositories written in ${lang}`;
    this.setState({ ...this.state, repos: data, mssg });
    setTimeout(() => {
      this.closeDetails();
    }, 1000);
  }

  clearFilter() {
    const { perPage, current } = this.state;
    const data = perPage.find((per) => per.id === current);
    this.setState({ ...this.state, repos: data.pageData, mssg: null });
    window.scrollTo(0, 0);
  }

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
    const { type, lang, repos, pages, current, mssg } = this.state;
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };

    const thisMins = new Date().getMinutes();
    const thisHour = new Date().getHours();
    const todayDate = new Date().getDate();
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();

    const moment = {
      mins: thisMins,
      hour: thisHour,
      date: todayDate,
      month: thisMonth,
      year: thisYear,
    };
    let key = 1;
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
                    <p data-lang="All" onClick={(e) => this.changeLanguage(e)}>
                      <i className="fas fa-check" data-lang="All"></i> All
                    </p>
                    <p
                      data-lang="JavaScript"
                      onClick={(e) => this.changeLanguage(e)}>
                      <i
                        className="fas fa-check inactive"
                        data-lang="JavaScript"></i>{" "}
                      JavaScript
                    </p>
                    <p data-lang="SCSS" onClick={(e) => this.changeLanguage(e)}>
                      <i className="fas fa-check inactive" data-lang="SCSS"></i>{" "}
                      SCSS
                    </p>
                    <p data-lang="HTML" onClick={(e) => this.changeLanguage(e)}>
                      <i className="fas fa-check inactive" data-lang="HTML"></i>{" "}
                      HTML
                    </p>
                    <p data-lang="PHP" onClick={(e) => this.changeLanguage(e)}>
                      <i className="fas fa-check inactive" data-lang="PHP"></i>{" "}
                      PHP
                    </p>
                    <p
                      data-lang="Python"
                      onClick={(e) => this.changeLanguage(e)}>
                      <i
                        className="fas fa-check inactive"
                        data-lang="Python"></i>{" "}
                      Python
                    </p>
                    <p
                      data-lang="TypeScript"
                      onClick={(e) => this.changeLanguage(e)}>
                      <i
                        className="fas fa-check inactive"
                        data-lang="TypeScript"></i>{" "}
                      TypeScript
                    </p>
                    <p data-lang="CSS" onClick={(e) => this.changeLanguage(e)}>
                      <i className="fas fa-check inactive" data-lang="CSS"></i>{" "}
                      CSS
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
          {mssg && (
            <div className="mssg">
              <p className="msg-text">{mssg}</p>
              <div className="cancel" onClick={() => this.clearFilter()}>
                <button>&times;</button> <p className="clear">Clear Filter</p>
              </div>
            </div>
          )}
          {repos.map((repo) => (
            <Repo repo={repo} moment={moment} months={months} key={key++} />
          ))}
        </div>
        <div className="buttons">
          <button
            className={`btn-prev ${current === 1 ? "disabled" : ""}`}
            disabled={current === 1 ? true : false}
            data-page="prev"
            onClick={(e) => this.changePage(e)}>
            Previous
          </button>
          <button
            className={`btn-next ${
              pages === 1 || current > 1 ? "disabled" : ""
            }`}
            disabled={pages === 1 || current > 1 ? true : false}
            data-page="next"
            onClick={(e) => this.changePage(e)}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default RepoList;
