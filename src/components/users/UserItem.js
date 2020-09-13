import React from "react";

const UserItem = (props) => {
  const { login, avatar_url, profile_url } = props.user;
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
        <a className="btn btn-dark btn-sm my-1" href={profile_url}>
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
