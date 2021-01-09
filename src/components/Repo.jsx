import React, { Component } from "react";

class Repo extends Component {
  state = {};

  render() {
    const { repo, moment, months } = this.props;
    const mins = new Date(repo.updatedAt).getMinutes();
    const hour = new Date(repo.updatedAt).getHours();
    const date = new Date(repo.updatedAt).getDate();
    const monthVar = new Date(repo.updatedAt).getMonth();
    const year = new Date(repo.updatedAt).getFullYear();
    let updatedDate;
    if (year === moment.year) {
      if (monthVar === moment.month) {
        if (date === moment.date) {
          if (hour === moment.hour) {
            if (mins === moment.mins) {
              updatedDate = `a few seconds ago`;
            } else {
              const diff = moment.mins - mins;
              if (diff === 1) {
                updatedDate = `a minute ago`;
              } else {
                updatedDate = `${diff} minutes ago`;
              }
            }
          } else {
            const diff = moment.hour - hour;
            if (diff === 1) {
              updatedDate = `${diff} hour ago`;
            } else {
              updatedDate = `${diff} hours ago`;
            }
          }
        } else {
          const diff = moment.date - date;
          if (diff === 1) {
            const hourDiff = moment.hour + 24 - hour;
            if (hourDiff < 24) {
              if (hourDiff === 1) {
                updatedDate = `${hourDiff} hour ago`;
              } else {
                updatedDate = `${hourDiff} hours ago`;
              }
            } else {
              updatedDate = `yesterday`;
            }
          } else if (1 < diff < 7) {
            updatedDate = `${diff} days ago`;
          } else {
            updatedDate = `on ${months[monthVar]} ${date}`;
          }
        }
      } else {
        updatedDate = `on ${months[monthVar]} ${date}`;
      }
    } else {
      updatedDate = `on ${months[monthVar]} ${date}, ${year}`;
    }
    return (
      <>
        {repo.name && (
          <div className="repo">
            <div className="name-lang">
              <div className="name">
                <a href={repo.url}>{repo.name}</a>
              </div>
              {repo.parent && (
                <p className="forked">
                  Forked from{" "}
                  <a href={repo.parent.url} className="link">
                    {repo.parent.nameWithOwner}
                  </a>
                </p>
              )}
              {repo.description && <p className="detail">{repo.description}</p>}
              <div className="lang-updated">
                {repo.primaryLanguage && (
                  <p className="lang">
                    <i
                      className="fas fa-circle"
                      style={{ color: `${repo.primaryLanguage.color}` }}></i>
                    {repo.primaryLanguage.name}
                  </p>
                )}
                {repo.stargazerCount > 0 && (
                  <p className="link">
                    <i className="far fa-star"></i>
                    {repo.stargazerCount}
                  </p>
                )}
                {repo.isFork ? (
                  <p className="link">
                    <i className="fas fa-code-branch"></i>{" "}
                    {repo.parent.forkCount}
                  </p>
                ) : !repo.isFork && repo.forkCount > 0 ? (
                  <p className="link">
                    <i className="fas fa-code-branch"></i> {repo.forkCount}
                  </p>
                ) : (
                  <></>
                )}
                {repo.parent && repo.parent.licenseInfo && (
                  <p>
                    <i className="fas fa-balance-scale"></i>{" "}
                    {repo.parent.licenseInfo.name}
                  </p>
                )}
                <p className="updated">Updated {updatedDate}</p>
              </div>
            </div>
            <div className="star">
              <button className="btn-star">
                <i className="far fa-star"></i> Star
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Repo;
