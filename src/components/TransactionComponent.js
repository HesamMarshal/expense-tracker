import { useEffect, useState } from "react";

const TransactionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");

  const [filteredTrx, setFilteredTrx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTrx(transactions);
      return;
    } else {
      const filteredItems = transactions.filter((t) =>
        t.description.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredTrx(filteredItems);
    }
  };
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);
  if (!transactions.length)
    return (
      <section>
        <h3>Add some transactions</h3>
      </section>
    );

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search transactions"
        className="search"
      />
      {filteredTrx.length
        ? filteredTrx.map((tr) => (
            <div
              key={tr.id}
              className="transaction"
              style={{ borderRight: tr.type === "expense" && "4px solid red" }}
            >
              <span> {tr.description}</span>
              <span>${tr.amount}</span>
            </div>
          ))
        : "No item found!"}
    </section>
  );

  // {
  //   transactions.map();
  // }
};

export default TransactionComponent;
