import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !isShow)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>

      {isShow && <TransactionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div className="expenseBox">
          Expnese <span style={{ color: "red" }}>${expense}</span>
        </div>
        <div className="expenseBox">
          Income <span>${income}</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
