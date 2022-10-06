import React, { useState } from "react";
import EditInput from "../edit-input/EditInput";
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
            <svg width="20" fill="#fff" viewBox="0 0 24 24">
              <path d="M19.853 19.147 12.707 12l7.146-7.147a.5.5 0 0 0-.707-.707L12 11.293 4.853 4.147a.5.5 0 0 0-.707.707L11.293 12l-7.147 7.146a.5.5 0 1 0 .707.707L12 12.707l7.146 7.147a.498.498 0 0 0 .707 0 .5.5 0 0 0 0-.707z" />
            </svg>
          </span>
          <button onClick={showInput}>edit</button>
        </div>
      </li>
      {showEditField && <EditInput id={id} onUpdate={updateTask} />}
    </div>
  );
}

export default Tasks;
