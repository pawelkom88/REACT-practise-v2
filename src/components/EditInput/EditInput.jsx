import React, {useState} from "react";
import "./EditInput.modules.css";

function EditInput({id, onUpdate}) {
  const [editedTask, setEditedTask] = useState("");

  return (
    <form
      className="edit-form"
      onSubmit={e => {
        onUpdate(e, id, editedTask);
      }}>
      <label>
        <input
          onChange={e => {
            setEditedTask(e.target.value);
          }}
          value={editedTask}
          placeholder="Edit task"
          className="edit-input"
        />
      </label>
    </form>
  );
}

export default EditInput;
