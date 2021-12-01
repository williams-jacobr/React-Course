import { useState } from "react/cjs/react.development";
import Card from "../UI/Card/Card";
import User from "./User";

import styles from "./Users.module.css";

const Users = function (props) {
  console.log(props.users);

  return (
    <Card className={styles.users}>
      <p>Hello</p>
      {props.users.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
};

export default Users;
