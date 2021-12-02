import { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = function (props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isError, setIsError] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const closeHandler = function () {
    setIsError(false);
    setErrorTitle("");
    setErrorMessage("");
  };

  const addUserHandler = function (e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserAge.trim().length === 0 || enteredName.trim().length === 0) {
      setIsError(true);
      setErrorTitle("Invalid input");
      setErrorMessage("Please enter a valid name and age");
      return;
    }

    if (+enteredUserAge < 1) {
      setIsError(true);
      setErrorTitle("Invalid age");
      setErrorMessage("Please enter an age above 0");
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: enteredUserAge,
    });

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
