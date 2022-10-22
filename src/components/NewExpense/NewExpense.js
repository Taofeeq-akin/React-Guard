import React from "react";

import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2021-05-25" max="2024-12-31" />
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