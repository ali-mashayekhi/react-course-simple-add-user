import { useState } from "react";

import styles from "./App.module.css";

import InputForm from "./components/InputForm/InputFrom";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/UI/Modal";

const storedUsers = [
  { username: "Alimasha", age: "24", id: "1321" },
  { username: "bladeOfMercy", age: "24", id: "3214123" },
];

function App() {
  const [users, setUsers] = useState(storedUsers);
  const [error, setError] = useState(false);

  function addUserHandler(userData) {
    setUsers((previousState) => [...previousState, userData]);
    storedUsers.unshift(userData);
  }

  function showInputErrorHandler(errorMessage) {
    setError(errorMessage);
  }

  function hideInputErrorHandler() {
    setError(false);
  }

  return (
    <div className={styles.container}>
      <InputForm
        onAddUser={addUserHandler}
        onInputError={showInputErrorHandler}
      />
      <UsersList users={users} />
      {error && (
        <Modal
          title={error.title}
          errorMessage={error.message}
          onCloseClick={hideInputErrorHandler}
        ></Modal>
      )}
    </div>
  );
}

export default App;
