import React, { useState } from "react";
import EditInput from "../EditInput/EditInput";
import "./Tasks.modules.css";

function Tasks({ tasks, onAdd, id, content }) {
  const [showEditField, setShowEditField] = useState(false);

  function showInput() {
    setShowEditField(!showEditField);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    onAdd(filteredTasks);
  }

  function updateTask(e, id, editedTask) {
    e.preventDefault();

    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.content = editedTask;
      }
      return task;
    });

    onAdd(newTasks);
    setShowEditField(false);
  }

  return (
    <div className="task-container">
      <li>
        <span>{content}</span>
        <div>
          <span className="close" onClick={() => deleteTask(id)}>
            X
          </span>
          <button onClick={showInput}>edit</button>
        </div>
      </li>
      {showEditField && <EditInput id={id} onUpdate={updateTask} />}
    </div>
  );
}

export default Tasks;
