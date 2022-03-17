export default function Display(props) {
    return (
      <div>
        <div className="display" id={"display_" + props.id}>
          {props.content}
        </div>
      </div>
    );
  }

