import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = cartCtx.totalAmount.toFixed(2)
  const hasItem = cartCtx.items.length > 0

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClear={props.onClear}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes["actions"]}>
        <button className={classes["button--alt"]} onClick={props.onClear}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
