import React, {useState, useEffect} from 'react'
import TransactionList from "./TransactionList"

const App = () => {
    //const [transactionsObj, setTransactions] = useState({transactions: [], totalBalance: 0})

    return (
        <div className="ui container">
          <TransactionList />
        </div>
    );
}

export default App;
