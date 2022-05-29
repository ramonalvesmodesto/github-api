import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

function GithubProvider({ children }) {
  const [github, setGithub] = useState({
    loading: false,
    hasUser: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    api.get(`users/${username}`).then(({ data }) => {
      setGithub((prevState) => ({
        ...prevState,
        hasUser: true,
        user: {
          id: data.id,
          login: data.login,
          avatar_url: data.avatar_url,
          name: data.name,
          html_url: data.html_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          followers: data.followers,
          following: data.following,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
        },
      }));
    });
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithub((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithub((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    github,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
