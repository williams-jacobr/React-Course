import { useState } from "react/cjs/react.development";
import styles from "./Overlay.module.css";

const Overlay = function (props) {
  const [display, setDisplay] = useState(true);

  const classes = display ? styles.overlay : [styles.overlay, styles.close];

  const clickHandler = function () {
    setDisplay(false);
  };

  return (
    <div onClick={clickHandler} className={classes}>
      {props.children}
    </div>
  );
};

export default Overlay;
