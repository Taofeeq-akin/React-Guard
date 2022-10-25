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
    </div>
  );
};

export default NewExpense;
