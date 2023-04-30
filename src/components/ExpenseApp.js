import { useEffect, useState } from "react";
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

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((tr) => {
      tr.type === "expense"
        ? (exp += parseFloat(tr.amount))
        : (inc += parseFloat(tr.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);
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
