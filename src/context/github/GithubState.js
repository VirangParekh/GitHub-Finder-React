import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

let GithubClientId;
let GithubClientSecret;

if (process.env.NODE_ENV !== "production") {
  GithubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  GithubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  GithubClientId = process.env.GITHUB_CLIENT_ID;
  GithubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  const searchUsers = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${GithubClientId}&client_secret=${GithubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getUser = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${GithubClientId}&client_secret=${GithubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  const getUserRepos = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${GithubClientId}&client_secret=${GithubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
