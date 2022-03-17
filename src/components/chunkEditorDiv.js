const Editor = (props) => {
  const { edited, infoType, singleline } = props;

  let input = (
    <input
      className="validate"
      onChange={edited}
      placeholder={"Your " + infoType + "..."}
      defaultValue={props.content}
      type="text"
    />
  );

  let textarea = (
    <textarea
      className="editor materialize-textarea"
      onChange={edited}
      rows="1"
      placeholder={"Your " + infoType + "..."}
      defaultValue={props.content}
    />
  );

  return <div>{singleline ? input : textarea}</div>;
};

export default Editor;
