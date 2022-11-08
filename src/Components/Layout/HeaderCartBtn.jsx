import classes from "./HeaderCartBtn.module.css";

import CartIcon from "../Cart/Carticon";

const HeaderCartBtn = (props) => {
  return (
    <button className={classes["button"]}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>3</span>
    </button>
  );
};

export default HeaderCartBtn;
