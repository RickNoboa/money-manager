import React, {Fragment} from 'react'

const TransactionItem = ({name, amount, type, id, handleDeleteSubmit}) => {
    return (
        <Fragment>
            <div>
                <p>{name} - <span className="transaction-amount">${parseFloat(amount).toFixed(2)}</span></p>
                <a className="delete" href="#" onClick={() => handleDeleteSubmit(id, amount, type)}>Delete</a>
            </div>
        </Fragment>
    )
}

export default TransactionItem