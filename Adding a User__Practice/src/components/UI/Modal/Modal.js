import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Modal = function (props) {
  return (
      <Card className={styles.modal}>{props.children}</Card>
  );
};

export default Modal;
