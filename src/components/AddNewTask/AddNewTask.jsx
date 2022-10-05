import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import "./AddNewTask.modules.css";

function AddNewTask({onAdd}) {
  const [task, setTask] = useState("");

  function addTask(e, newTask) {
    e.preventDefault();

    if (task.length > 0) {
      onAdd(prevTasks => {
        return [...prevTasks, {id: uuidv4(), content: newTask}];
      });
    } else {
      alert("Empty field");
    }

    setTask("");
  }

  return (
    <form className="add-task-form" onSubmit={e => addTask(e, task)}>
      <label>Add task then press enter</label>
      <input
        className={`${task.length > 0 ? "success" : "failure"}`}
        onChange={e => setTask(e.target.value)}
        value={task}
        placeholder="New task"
      />
    </form>
  );
}

export default AddNewTask;
