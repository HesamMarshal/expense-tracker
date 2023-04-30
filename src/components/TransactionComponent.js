const TransactionComponent = ({ transactions }) => {
  return (
    <section>
      {transactions.map((tr) => (
        <div key={tr.id}>{tr.description}</div>
      ))}
    </section>
  );

  {
    transactions.map();
  }
};

export default TransactionComponent;
