import React from "react";
import classes from "./Header.module.css";
import mealImage from "../assets/meals.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.Header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes.main - image}>
        <img src={mealImage} alt="Delicious food table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
