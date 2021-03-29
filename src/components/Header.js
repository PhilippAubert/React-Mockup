import "./Header.css";

function Header({ title }) {
  function AddTask() {
    console.log("add new task");
  }
  return (
    <header className="Header">
      <h1>My ToDo's</h1>
      <button onClick={AddTask} className="Button-Header">
        {" "}
        Add To Do
      </button>
    </header>
  );
}

export default Header;
