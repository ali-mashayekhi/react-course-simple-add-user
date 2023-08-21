import { useState } from "react";
import styles from "./InputForm.module.css";

function InputForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const newUser = {
      username: event.target[0].value,
      age: event.target[1].value,
      id: +Math.random(),
    };

    props.onAddUser(newUser);

    setEnteredUsername("");
    setEnteredAge("");
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
