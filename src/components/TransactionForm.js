import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="description"
        value={formValues.description}
        onChange={changeHandler}
      />
      <div>
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>

        <input
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
