import { useState } from "react";

// import styles from "./InputForm.module.css";

const InputForm = function (props) {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = function (e) {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const submittedUser = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSubmit(submittedUser);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
        </div>
      </div>
      <div>
        <div>
          <label>Age (Years)</label>
        </div>
        <div>
          <input
            value={enteredAge}
            type="number"
            onChange={ageChangeHandler}
          ></input>
        </div>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default InputForm;
