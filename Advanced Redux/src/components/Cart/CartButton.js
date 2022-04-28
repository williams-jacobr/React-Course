import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/index";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
