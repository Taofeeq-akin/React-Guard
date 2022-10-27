import React, { useState } from "react";
import FormExpense from "./FormExpense";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <FormExpense onSaveExpense={saveExpenseDataHandler} />
    </div> // onSaveExpenses here is a function which will be called on FormExpense (Cus we moving data from child to parent)
  );
};

export default NewExpense;
