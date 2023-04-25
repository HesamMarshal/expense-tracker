import { useState } from "react";
import TransactionComponent from "./TransactionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  return (
    <section className="container">
      <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button>Add</button>
      </div>
      <div className="resultSection">
        <div> Expnese {expense}</div>
        <div> Income {income}</div>
      </div>
      <TransactionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
