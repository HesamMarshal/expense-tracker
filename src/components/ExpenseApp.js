import { useState } from "react";
import TransactionComponent from "./TransactionComponent";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    console.log(formValues);
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };
  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransactionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
