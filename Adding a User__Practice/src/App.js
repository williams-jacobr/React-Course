import { useState } from "react";
import Input from "./components/InputForm/Input";
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
    </div>
  );
}

export default App;
