import { useState } from "react";

import InputForm from "./components/InputForm/InputFrom";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/Modal/Modal";

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
      <div>
        <InputForm onAddUser={addUserHandler} />
        <UsersList users={users} />
      </div>
      <Modal />
    </div>
  );
}

export default App;
