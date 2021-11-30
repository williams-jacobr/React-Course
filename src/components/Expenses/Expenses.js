import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "../ExpensesFilter/ExpensesFIlter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const filterChangeHandler = function (selectedYear) {
    setSelectedFilter(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
