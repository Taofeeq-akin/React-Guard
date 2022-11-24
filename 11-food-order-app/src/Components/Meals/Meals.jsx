import React from "react";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./mealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
