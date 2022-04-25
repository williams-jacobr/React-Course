import { useState } from "react";

import useInput from "../../hooks/use-input";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isSixChars = (value) => value.trim().split(" ").join("").length === 6;

const Checkout = function (props) {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postcode: true,
  });

  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const {
    value: street,
    valueIsValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    blurChangeHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput(isNotEmpty);

  const {
    value: city,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    blurChangeHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput(isNotEmpty);

  const {
    value: postcode,
    valueIsValid: postcodeIsValid,
    hasError: postcodeHasError,
    valueChangeHandler: postcodeChangeHandler,
    blurChangeHandler: postcodeBlurHandler,
    reset: postcodeReset,
  } = useInput(isSixChars);

  const confirmHandler = function (event) {
    event.preventDefault();

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postcode: postcodeIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postcodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({ name, street, city, postcode });

    nameReset();
    streetReset();
    cityReset();
    postcodeReset();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameHasError && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">House Number and Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={street}
        />
        {streetHasError && <p>Please enter a valid address</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={city}
        />
        {cityHasError && <p>Please enter a valid city name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.postcode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postcode">Postcode</label>
        <input
          type="text"
          id="postcode"
          onChange={postcodeChangeHandler}
          onBlur={postcodeBlurHandler}
          value={postcode}
        />
        {postcodeHasError && <p>Please enter a valid postcode</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
