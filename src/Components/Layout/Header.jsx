import React from "react";

import classes from "./Header.module.css";
import mealImage from "../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn onShow={props.onShow} />
      </header>
      <div className={classes.main_image}>
        <img src={mealImage} alt="Delicious food table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
