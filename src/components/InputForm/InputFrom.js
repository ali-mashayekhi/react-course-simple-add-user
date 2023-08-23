import { useState } from "react";
import styles from "./InputForm.module.css";

function InputForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const age = event.target[1].value;

    const newUser = {
      username: username,
      age: age,
      id: +Math.random(),
    };

    setEnteredUsername("");
    setEnteredAge("");

    if (username === "" || age === "")
      return props.onInputError(
        "Please enter a valid name and age (non-empty values)."
      );

    if (isNaN || +age <= 0)
      return props.onInputError("Please enter a valid age (> 0).");

    props.onAddUser(newUser);
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <form className={styles["user-input"]} onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        type="text"
        id="age"
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <button>Add User</button>
    </form>
  );
}

export default InputForm;
