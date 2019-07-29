import React from 'react'
import './TransactionItem.css'

const TransactionItem = ({name, amount, type}) => {
    return (
        <div className={type === 'deposit' ? 'item deposit' : 'item withdrawal'}>
            <div className="content">
                <p>{name} - <span className="transaction-amount">${parseFloat(amount).toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default TransactionItem