import React, { useState } from "react";
import Display from "./chunkDisplayDiv";
import Editor from "./chunkEditorDiv";

const CvChunk = (props) => {
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const infoType = props.infoType;

  const buttonClicked = () => {
    setEditMode(!editMode);
    // setState({ editMode: !state.editMode });
  };

  const contentEdited = (e) => {
    setContent(e.target.value);
    // setState({ content: e.target.value });
  };

  let addOrEdit = content.length > 0 ? "Edit " : "Add ";

  return (
    <div>
      {(!props.editMasterEnabled || !editMode) && (
        <Display content={content} />
      )}
      {props.editMasterEnabled !== false && editMode && (
        <Editor
          edited={contentEdited}
          content={content}
          infoType={infoType}
          singleline={props.singleline}
        />
      )}
      {props.editMasterEnabled && (
        <button className="waves-effect waves-light btn" onClick={buttonClicked}>
          {editMode ? "Done" : addOrEdit + infoType}
        </button>
      )}
    </div>
  );
};

export default CvChunk;
