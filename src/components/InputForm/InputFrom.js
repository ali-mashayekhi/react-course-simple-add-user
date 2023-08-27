import { useState } from "react";
import styles from "./InputForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function InputForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const username = enteredUsername;
    const age = enteredAge;

    if (username === "" || age === "")
      return props.onInputError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

    if (isNaN(age) || +age <= 0)
      return props.onInputError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });

    setEnteredUsername("");
    setEnteredAge("");

    const newUser = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    props.onAddUser(newUser);
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={styles["user-input"]}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default InputForm;
