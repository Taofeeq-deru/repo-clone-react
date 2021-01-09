import React, { Component } from "react";
import { Bio, RepoList } from "./index";

class RepoPage extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <>
        {/* {pc-view tab links} */}
        <div className="pc-tabs" role="navigation">
          <div className="name" id="tab-name">
            <img
              src={data.avatarUrl}
              alt={data.login}
              className="avi my-avi"
              loading="lazy"
            />
            <p className="my-username">{data.login}</p>
          </div>
          <p className="tab-link">
            <svg height="15px" width="15px" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
              />
            </svg>
            Overview
          </p>
          <p className="tab-link active">
            <svg height="15px" width="15px" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              />
            </svg>
            Repositores <span className="amount repo-count">41</span>
          </p>
          <p className="tab-link">
            <svg height="15px" width="15px" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
              />
            </svg>
            Projects
          </p>
          <p className="tab-link">
            <svg height="15px" width="15px" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
              />
            </svg>
            Packages
          </p>
        </div>
        <div className="flex-pc">
          <Bio data={data} />
          {/* {mobile-view tab links} */}
          <div className="mobile-tabs" role="navigation">
            <p>Overview</p>
            <p className="active">
              Repositores{" "}
              <span className="amount repo-count">{data.repoCount}</span>
            </p>
            <p>Projects</p>
            <p>Packages</p>
          </div>
          <div className="tab-content">
            <RepoList
              repos={data.repos}
              total={data.repoCount}
              username={data.login}
            />
          </div>
        </div>
      </>
    );
  }
}

export default RepoPage;
