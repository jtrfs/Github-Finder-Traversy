import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired
  };

  render() {
    const { repos, user, loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{""}
        {user.hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={user.avatar_url}
              alt="avatar"
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>
          <div>
            {user.bio && (
              <>
                <h3>Bio</h3>
                <p>{user.bio}</p>
              </>
            )}
            <a href={user.html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {user.login && (
                  <>
                    <strong>Username: </strong>
                    {user.login}
                  </>
                )}
              </li>
              <li>
                {user.company && (
                  <>
                    <strong>Company: </strong>
                    {user.company}
                  </>
                )}
              </li>
              <li>
                {user.blog && (
                  <>
                    <strong>Website: </strong>
                    {user.blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {user.followers}</div>
          <div className="badge badge-success">Following: {user.following}</div>
          <div className="badge badge-light">
            Public Repos: {user.public_repos}
          </div>
          <div className="badge badge-dark">
            Public Gists: {user.public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </>
    );
  }
}

export default User;
