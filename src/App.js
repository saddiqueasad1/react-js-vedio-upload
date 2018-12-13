import React, { Component } from "react";
import UploadVideo from "./comp/uploadVideo";
import VideoList from "./comp/videoList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import User from "./comp/user";

class App extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Upload Video</Tab>
          <Tab>Video list</Tab>
          <Tab>user list</Tab>
        </TabList>

        <TabPanel>
          <UploadVideo />
        </TabPanel>
        <TabPanel>
          <VideoList />
        </TabPanel>
        <TabPanel>
          <User />
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
