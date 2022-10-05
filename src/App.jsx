import React, {useState} from "react";
import AddNewTask from "./components/AddNewTask/AddNewTask";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  let x;

  if (tasks.length === 0) {
    x = <p>No tasks</p>;
  } else {
    x = (
      <div>
        <p>Your tasks: </p>
        {/* <button>Delete all</button> */}
      </div>
    );
  }

  return (
    <div className="container">
      <AddNewTask onAdd={setTasks} />
      <h5>{x}</h5>
      <ul>
        {tasks.map((task, id) => (
          <Tasks key={id} {...task} tasks={tasks} onAdd={setTasks} />
        ))}
      </ul>
    </div>
  );
}

export default App;
