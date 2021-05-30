import React from "react";
import RepoItem from "../repos/RepoItem";

const Repos = ({ repos }) =>
  repos.map(repo => <RepoItem repo={repo} key={repo.id} />);

export default Repos;
