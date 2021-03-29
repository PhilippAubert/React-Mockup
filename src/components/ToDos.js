import "./ToDos.css";

function ToDos({ title }) {
  function DidTask() {
    console.log("task done");
  }
  function DeleteTask() {
    console.log("task deleted");
  }

  return (
    <div className="ToDo-Frame">
      <h2>{title}</h2>
      <div className="Button-Frame">
        <button onClick={DeleteTask} className="Button-List">
          {" "}
          Delete{" "}
        </button>
        <button onClick={DidTask} className="Button-List">
          {" "}
          Done{" "}
        </button>
      </div>
    </div>
  );
}
export default ToDos;
