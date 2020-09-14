import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, profile_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={login}
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>
      <div>
        <Link className="btn btn-dark btn-sm my-1" to={profile_url}>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
