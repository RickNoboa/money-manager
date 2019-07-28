import React from 'react'

const TransactionList = ({transactions}) => {
    const renderList = () => {
        if(transactions.length){
            return transactions.map(transaction => {
                return (
                    <div className="item" key={transaction.id}>
                        <div className="content">
                            <p>{transaction.name} - ${parseFloat(transaction.amount).toFixed(2)}</p>
                        </div>
                    </div>
                )
            })
        }
        return <p>There are no transactions</p>

    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default TransactionList