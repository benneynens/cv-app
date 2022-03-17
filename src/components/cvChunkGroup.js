import React, { Component } from "react";
import CvChunk from "./cvChunk";
import uniqid from "uniqid";


class CvChunkGroup extends Component {
  constructor(props) {
    super();

    this.state = {
      chunksArray: [],
      newChunk: {
          text: "",
          id: uniqid(),
      },
    };

    this.groupType = props.groupType;

  }

  inputChanged = (e) => {
    this.setState({
    newChunk: {text: e.target.value, id: this.state.newChunk.id},
    });
  };

  addNew = () => {
    let newChunk = <CvChunk key={this.state.newChunk.id} infoType={this.state.newChunk.text} editMasterEnabled={this.props.editMasterEnabled} />;

    this.setState({
      chunksArray: this.state.chunksArray.concat({
          component: newChunk,
          key: this.state.newChunk.id,
      }),
      newChunk: {text: "", id: uniqid()},
    });
  };

  render() {
    return (
      <div className="chunkGroup">
        <input
          type="text"
          placeholder={this.groupType}
          value={this.state.newChunkText}
          onChange={this.inputChanged}
        ></input>
        <button onClick={this.addNew} className="waves-effect waves-light btn">
          Add New
        </button>

        {this.state.chunksArray.map(chunk => {
            return <div key={chunk.key}>{chunk.component}</div>; //
        })}
      </div>
    );
  }
}

export default CvChunkGroup;
