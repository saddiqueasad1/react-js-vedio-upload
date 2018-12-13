import React, { Component } from "react";
import { db } from "../firebase";
import ReactPlayer from "react-player";

class User extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    this.getImage();
  }

  getImage() {
    const ordersRef = db.ref("data");
    ordersRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          title: items[item].firstName
        });
      }
      this.setState({
        items: newState
      });
      console.log(this.state.items);
    });
  }

  render() {
    return (
      <div>
        <h1>list</h1>
        <ul>
          {this.state.items.map(item => {
            return (
              <li>
                <ReactPlayer
                  type="video/mp4"
                  data-reactid=".0.1.0.0.0"
                  url={
                    item.title || "http://www.youtube.com/watch?v=ysz5S6PUM-U"
                  }
                  alt="Uploaded "
                  height="200"
                  width="200"
                  controls={true}
                  playing={false}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default User;
