import React, { useContext, useState } from "react";
import useHttp from "../../hooks/use-http";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = function (props) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const {
    isLoading: isSubmitting,
    error: httpError,
    sendRequest: sendOrderRequest,
  } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = function (id) {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = function (item) {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const orderHandler = function () {
    setIsCheckingOut(true);
  };

  const submitOrderHandler = async function (userData) {
    await sendOrderRequest(
      {
        url: "https://react-http-bf455-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        body: { user: userData, orderedItems: cartCtx.items },
      },
      (data) => {
        setDidSubmit(true);
        cartCtx.clearCart();
      }
    );
  };

  if (httpError) {
    return (
      <Modal onBackdropClick={props.onClose}>
        {httpError}
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckingOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckingOut && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
      ;
    </React.Fragment>
  );

  return (
    <Modal onBackdropClick={props.onClose}>
      {!didSubmit && !isSubmitting && cartModalContent}
      {!didSubmit && isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
