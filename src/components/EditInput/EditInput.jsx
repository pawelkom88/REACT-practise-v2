import React, { useState } from "react";
import Form from "../form/Form";
import styles from "./EditInput.module.css";

function EditInput({ id, onUpdate }) {
  const [editedTask, setEditedTask] = useState("");

  const formProps = {
    formClass: styles["edit-form"],
    inputClass: styles["edit-input"],
    onSubmit: e => onUpdate(e, id, editedTask),
    onChange: e => setEditedTask(e.target.value),
    value: editedTask,
    placeholder: "Edit task",
  };

  return <Form {...formProps}>Update task</Form>;
}

export default EditInput;
