import React, {useState, useEffect} from 'react';
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import {generateKey} from "../helpers/generateKey";

const App = () => {
  const [transactionsObj, setTransactions] = useState({transactions: [], totalBalance: 0})

  const handleSubmit = e => {
    e.preventDefault()
    const {transactionName, transactionAmount} = e.target
    const transactionId = generateKey()
    const tempObject = {
      id: transactionId,
      name: transactionName.value,
      amount: transactionAmount.value
    }

    setTransactions({
      transactions: [...transactionsObj.transactions, tempObject],
      totalBalance: parseFloat(transactionsObj.totalBalance) + parseFloat(transactionAmount.value)
    })
  }

  useEffect(() => console.log(transactionsObj))

  return (
    <div className="ui container">
      <TransactionList transactions={transactionsObj.transactions} />
      <AddTransaction handleSubmit={handleSubmit} />
      <p>Total transactions: {transactionsObj.transactions.length} | Total Balance: ${parseFloat(transactionsObj.totalBalance).toFixed(2)}</p>
    </div>
  );
}

export default App;
