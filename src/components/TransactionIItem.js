import React from 'react'
import './TransactionItem.css'

const TransactionItem = ({name, amount, type, id, handleDeleteSubmit}) => {
    return (
        <div className={type === 'deposit' ? 'item deposit' : 'item withdrawal'}>
            <div className="content">
                <p>{name} - <span className="transaction-amount">${parseFloat(amount).toFixed(2)}</span></p>
                <a className="delete" href="#" onClick={() => handleDeleteSubmit(id, amount, type)}>Delete</a>
            </div>
        </div>
    )
}

export default TransactionItem