import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFIlter";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const filterChangeHandler = function (selectedYear) {
    setSelectedFilter(selectedYear);
    console.log(selectedFilter, selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedFilter} onFilterChange={filterChangeHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
