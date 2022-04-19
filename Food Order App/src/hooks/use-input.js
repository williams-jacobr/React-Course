import { useState } from "react";

const useInput = function (validateValue) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(value);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = function (event) {
    setValue(event.target.value);
  };

  const blurChangeHandler = function (event) {
    setIsTouched(true);
  };

  const reset = function () {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInput;
