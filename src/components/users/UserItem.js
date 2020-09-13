import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    profile_url: "https://github.com/mojombo",
  };

  render() {
    const { login, avatar_url, profile_url } = this.state;
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
  }
}

export default UserItem;
