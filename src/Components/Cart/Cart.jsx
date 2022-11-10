import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";

import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddhandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} //Binding ensure that the id is passed to the remove funtion
          onAddd={cartItemAddhandler.bind(null, item)}
        />
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
