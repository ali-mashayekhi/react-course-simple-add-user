import React, { useState } from "react";

import InputForm from "./components/InputForm/InputForm";
import UsersList from "./components/UsersList/UsersList";

const storedUsers = [
  { username: "Alimasha", age: "24", id: "1321" },
  { username: "bladeOfMercy", age: "24", id: "3214123" },
];

function App() {
  const [users, setUsers] = useState(storedUsers);

  function addUserHandler(userData) {
    setUsers((previousState) => [userData, ...previousState]);
    storedUsers.unshift(userData);
  }

  return (
    <div>
      <InputForm onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
