import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /*
  // Under hood before JSX is introduce, firstly need to import react to our file (Behind the scene)
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started"),
    React.createElement(Expenses, { item: expenses })
  ); // first, Element tag in string, second attribute if available, content inside the element tag
*/

  return (
    <div>
      <NewExpense />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
