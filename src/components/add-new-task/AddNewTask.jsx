import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../form/Form";
import styles from "./AddNewTask.module.css";

function AddNewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function addTask(e, newTask) {
    e.preventDefault();

    if (task.length > 0) {
      onAdd(prevTasks => [...prevTasks, { id: uuidv4(), content: newTask }]);
    }

    // clear input field after every submit
    setTask("");
  }

  const formProps = {
    formClass: styles["add-task-form"],
    inputClass: `${task.length > 0 ? styles["success"] : styles["failure"]}`,
    onSubmit: e => addTask(e, task),
    onChange: e => setTask(e.target.value),
    value: task,
    placeholder: styles["New task"],
  };

  return <Form {...formProps}>Add task then press enter</Form>;
}

export default AddNewTask;
