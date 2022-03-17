import React, { Component } from "react";
import CvChunk from "./components/cvChunk";
import CvChunkGroup from "./components/cvChunkGroup";
import EditMasterToggle from "./components/EditToggle";
import uniqid from "uniqid";

import "./style.css";

const headerFields = ["Name", "Email", "Phone Number"];

class App extends Component {
  constructor() {
    super();

    this.state = {
      masterEditMode: true,
    };

    this.headerFieldsWithKeys = headerFields.map((arrayVal) => ({name: arrayVal, key: uniqid()}));
  }



  toggleEditMode = (e) => {
    this.setState({
      masterEditMode: !this.state.masterEditMode,
    });
  };


  render() {
    return (
      <div>
        <EditMasterToggle editEnabled={this.state.masterEditMode} changed={this.toggleEditMode} />
        {this.headerFieldsWithKeys.map((headerField) => {
          return (
            <CvChunk
              infoType={headerField.name}
              key={headerField.key}
              editMasterEnabled={this.state.masterEditMode}
              // singleline
            />
          );
        })}
        <CvChunkGroup groupType="Past Employment" editMasterEnabled={this.state.masterEditMode} />
        <CvChunkGroup groupType="Academics" editMasterEnabled={this.state.masterEditMode} />
        <CvChunkGroup groupType="Other Interests" editMasterEnabled={this.state.masterEditMode} />
      </div>
    );
  }
}

export default App;
