import React, { Component } from "react";

class VideoList extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Jill", age: 30 },
        { id: 3, name: "Peter", age: 40 }
      ]
    };

    console.log(this.state);
  }
  deleteUser() {
    alert("deleted");
  }
  changeUserName() {
    alert("changeUserName");
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => {
          return (
            <div>
              <li>
                {user.name} {user.age}
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default VideoList;
