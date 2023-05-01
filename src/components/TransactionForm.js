import { useState } from "react";

const TransactionForm = ({ addTransaction, setIsShow }) => {
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
    setIsShow(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="description"
        value={formValues.description}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
      />
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>

        <input
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
