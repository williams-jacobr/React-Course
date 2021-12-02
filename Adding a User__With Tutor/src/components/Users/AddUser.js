import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = function (props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [isError, setIsError] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const closeHandler = function () {
    setIsError(false);
    setErrorTitle("");
    setErrorMessage("");
  };

  const usernameChangeHandler = function (e) {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = function (e) {
    e.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setIsError(true);
      setErrorTitle("Invalid input");
      setErrorMessage("Please enter a valid name and age");
      return;
    }

    if (+enteredAge < 1) {
      setIsError(true);
      setErrorTitle("Invalid age");
      setErrorMessage("Please enter an age above 0");
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      {isError && (
        <ErrorModal
          title={errorTitle}
          message={errorMessage}
          onClose={closeHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
