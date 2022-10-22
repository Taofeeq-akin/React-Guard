import React, { useState } from "react";

import "./NewExpense.css";

const NewExpense = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  });

  const titleChangedHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangedHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangedHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangedHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangedHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2021-05-25"
              max="2024-12-31"
              onChange={dateChangedHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
