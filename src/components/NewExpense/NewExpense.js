import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = function (props) {
  const [editing, setEditing] = useState(false);

  const toggleEditingHandler = function () {
    setEditing((prev) => !prev);
  };

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);

    toggleEditingHandler();
  };

  console.log(editing);

  if (!editing)
    return (
      <div className="new-expense">
        <button onClick={toggleEditingHandler}>Add New Expense</button>
      </div>
    );

  if (editing)
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleEditingHandler}
        />
      </div>
    );
};

export default NewExpense;
