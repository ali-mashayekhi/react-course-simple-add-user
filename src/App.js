import { useState } from "react";

import styles from "./App.module.css";

import InputForm from "./components/InputForm/InputFrom";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/Modal/Modal";
import Overlay from "./components/Overlay/Overlay";

const storedUsers = [
  { username: "Alimasha", age: "24", id: "1321" },
  { username: "bladeOfMercy", age: "24", id: "3214123" },
];

function App() {
  const [users, setUsers] = useState(storedUsers);
  const [hideError, setHideError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function addUserHandler(userData) {
    setUsers((previousState) => [userData, ...previousState]);
    storedUsers.unshift(userData);
  }

  function showInputErrorHandler(errorMessage) {
    setErrorMessage(errorMessage);
    setHideError(false);
  }

  function hideInputErrorHandler() {
    setErrorMessage("");
    setHideError(true);
  }

  return (
    <div>
      <div className={styles.container}>
        <InputForm
          onAddUser={addUserHandler}
          onInputError={showInputErrorHandler}
        />
        <UsersList users={users} />
      </div>
      <Modal
        isHidden={hideError}
        errorMessage={errorMessage}
        onCloseClick={hideInputErrorHandler}
      />
      <Overlay isHidden={hideError} onCloseClick={hideInputErrorHandler} />
    </div>
  );
}

export default App;
