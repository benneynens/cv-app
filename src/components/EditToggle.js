import React from "react";

const EditMasterToggle = (props) => {

  return (
    <div>
      <label>
        <input type="checkbox" defaultChecked={props.editEnabled} onChange={props.changed} />
        <span>Edit</span>
      </label>
    </div>
  );
};

export default EditMasterToggle;
