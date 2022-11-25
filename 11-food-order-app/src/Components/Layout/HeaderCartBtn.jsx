import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartBtn.module.css";

import CartIcon from "../Cart/Carticon";
import CartContext from "../store/Cart-context";

const HeaderCartBtn = (props) => {
  const [btnHighlighted, setBtnHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighLighted(true);

    const timer = setTimeout(() => {
      setBtnHighLighted(false);
    }, 300);

    // to clear to return setBtnHighLighted to false back
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
