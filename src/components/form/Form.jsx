import React from "react";

export default function Form(props) {
  const { children, formClass, inputClass, onSubmit, onChange, value, placeholder } = props;

  return (
    <form className={formClass} onSubmit={onSubmit}>
      <label>{children}</label>
      <input onChange={onChange} value={value} placeholder={placeholder} className={inputClass} />
    </form>
  );
}
