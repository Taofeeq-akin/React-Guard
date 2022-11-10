import { useContext } from "react";
import classes from "./HeaderCartBtn.module.css";

import CartIcon from "../Cart/Carticon";
import CartContext from "../store/Cart-context";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <button className={classes["button"]} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
