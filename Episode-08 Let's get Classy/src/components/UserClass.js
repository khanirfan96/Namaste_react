import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        followers: "",
        following: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("Parent Component did mount");
    // API Call https://api.github.com/users/USERNAME

    const data = await fetch("https://api.github.com/users/khanirfan96");
    const json = await data.json();

    this.setState({
      data: json,
    });
    console.log(json, "yryry");
  }

  render() {
    // const { name, location, learning } = this.props;
    const { name, followers, following, location, avatar_url } = this.state.data;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h1>Name: {name}</h1>
        <h2>Follower: {following} </h2>
        <h3>Location: {location} </h3>
        <img />
      </div>
    );
  }
}

export default UserClass;
