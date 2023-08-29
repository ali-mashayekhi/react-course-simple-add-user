import { useState, useRef } from "react";
import styles from "./InputForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function InputForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    console.log(nameInputRef.current.value);

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    console.log(username, age);

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

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    const newUser = {
      username: username,
      age: age,
      id: Math.random().toString(),
    };
    props.onAddUser(newUser);
  }

  return (
    <Card className={styles["user-input"]}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default InputForm;
