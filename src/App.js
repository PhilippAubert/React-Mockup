import "./styles.css";
import Header from "./components/Header.js";
import ToDos from "./components/ToDos.js";

export default function App() {
  return (
    <div className="App">
      <Header title="My To Do's" />
      <ToDos title="Do the laundry" />
      <ToDos title="Clean your room" />
      <ToDos title="Code JavaScript" />
      <ToDos title="Get drunk " />
      <ToDos title="Repeat" />
    </div>
  );
}
