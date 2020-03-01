import React, { useState, useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";
import { FirebaseContext } from "../../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);

  const submitHandler = e => {
    e.preventDefault();
    if (value.trim()) {
      addNote(value.trim())
        .then(() => {
          show("Note created", "success");
        })
        .catch(() => show("Something went wrong", "danger"));
      setValue("");
    } else {
      show("Type your note");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your note here"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
