const TransactionComponent = ({ transactions }) => {
  return (
    <section>
      {transactions.length &&
        transactions.map((tr) => (
          <div
            key={tr.id}
            className="transaction"
            style={{ borderRight: tr.type === "expense" && "4px solid red" }}
          >
            <span> {tr.description}</span>
            <span>${tr.amount}</span>
          </div>
        ))}
    </section>
  );

  {
    transactions.map();
  }
};

export default TransactionComponent;
