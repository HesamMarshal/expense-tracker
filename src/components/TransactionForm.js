import { useState } from "react";

const TransactionForm = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  return (
    <form>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <div>
        <input type="radio" name="type" value="expense" />
        <label>Expense</label>

        <input type="radio" name="type" value="income" />
        <label>Income</label>
      </div>
      <button>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
