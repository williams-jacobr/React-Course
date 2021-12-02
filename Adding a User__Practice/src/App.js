import { useState } from "react";
import Input from "./components/InputForm/Input";
import Modal from "./components/UI/Modal/Modal";
import Overlay from "./components/UI/Overlay/Overlay";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = function (data) {
    setUsers((prev) => [data, ...prev]);
  };
  return (
    <div>
      <Input onAddUser={addUserHandler} />
      <Users users={users} />
      <Overlay>
        <Modal>
          <p>Hello</p>
        </Modal>
      </Overlay>
    </div>
  );
}

export default App;
