import InputForm from "./InputForm";

import styles from "./Input.module.css";
import Card from "../UI/Card/Card";

const Input = function (props) {
  const submitHandler = function (data) {
    props.onAddUser(data);
  };

  return (
    <Card className={styles.input}>
      <InputForm onSubmit={submitHandler} />
    </Card>
  );
};

export default Input;
