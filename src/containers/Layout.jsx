import React, { Component } from "react";
import { Nav, RepoPage, Footer } from "../components";
import { content } from "../query";
import axios from "axios";

class Layout extends Component {
  state = {
    avatarUrl: "",
    bio: "",
    email: "",
    location: "",
    login: "",
    name: "",
    twitterUsername: "",
    websiteUrl: "",
    followers: "",
    following: "",
    stars: "",
    repos: [],
    repoCount: "",
  };

  componentDidMount() {
    const url = "https://api.github.com/graphql";
    const API_KEY = process.env.API_KEY;
    const data = JSON.stringify(content);
    const config = {
      url,
      method: "post",
      data,
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    axios(config)
      .then((resp) => {
        const data = resp.data.data.viewer;
        const {
          avatarUrl,
          bio,
          email,
          location,
          login,
          name,
          twitterUsername,
          websiteUrl,
          followers,
          following,
          repositories,
          starredRepositories,
        } = data;

        const repoCount = repositories.totalCount;
        const repos = repositories.nodes;
        const stars = starredRepositories.totalCount;
        console.log(repos);

        this.setState({
          avatarUrl,
          bio,
          email,
          location,
          login,
          name,
          twitterUsername,
          websiteUrl,
          followers: followers.totalCount,
          following: following.totalCount,
          repoCount,
          repos,
          stars,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
      });
  }

  render() {
    const { avatarUrl, login } = this.state;
    return (
      <>
        <Nav avi={avatarUrl} username={login} />
        <div id="content">
          <RepoPage data={this.state} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
