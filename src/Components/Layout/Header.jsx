import React from "react";

import classes from "./Header.module.css";
import mealImage from "../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes.main_image}>
        <img src={mealImage} alt="Delicious food table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
