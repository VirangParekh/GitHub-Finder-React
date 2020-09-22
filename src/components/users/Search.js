import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import githubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const GithubContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      GithubContext.searchUsers(text);
      setText("");
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          name="text"
          type="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="Submit"
          placeholder="Search"
          className="btn btn-dark btn-block"
        />
        {GithubContext.users.length > 0 && (
          <button
            className="btn btn-light btn-block"
            onClick={GithubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
