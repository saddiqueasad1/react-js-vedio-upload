import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    toDashboard: false
  };

  goto = () => {
    this.setState({ toDashboard: true });
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.toDashboard === true) {
      return <Redirect to="/app" />;
    }

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
          <button type="button" className="btn btn-success" onClick={this.goto}>
            Next>
          </button>
        </div>
      );
    } else {
      fbContent = (
        <div
          style={{
            width: "1000px",
            margin: "auto",
            padding: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FacebookLogin
            appId="277940589528329"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}
