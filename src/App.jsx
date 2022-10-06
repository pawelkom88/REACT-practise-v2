import React, { useState } from "react";
import AddNewTask from "./components/add-new-task/AddNewTask";
import Tasks from "./components/tasks/Tasks";
import Modal from "./components/modal/Modal";
import DeleteTasksModal from "./components/modal/DeleteTasksModal";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));
  const [showModal, setShowModal] = useState(false);

  let taskTotal;

  if (tasks.length === 0) {
    taskTotal = <p>No tasks</p>;
  } else {
    taskTotal = (
      <button
        onClick={() => {
          setShowModal(true);
        }}>
        Delete all
      </button>
    );
  }

  return (
    <div className="container">
      <AddNewTask tasks={tasks} onAdd={setTasks} />
      <h5>{taskTotal}</h5>
      <ul>
        {tasks.map((task, id) => (
          <Tasks key={id} {...task} tasks={tasks} onAdd={setTasks} />
        ))}
      </ul>
      {showModal && (
        <Modal>
          <DeleteTasksModal onToggle={setShowModal} deleteAll={setTasks} />
        </Modal>
      )}
    </div>
  );
}

export default App;
