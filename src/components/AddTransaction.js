import React from 'react'

const AddTransaction = ({handleAddSubmit}) => {
    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={handleAddSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="transactionName" />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="text" name="transactionAmount" />
                </div>
                <div>
                    <label htmlFor="transactionTypeDeposit">Deposit</label>
                    <input type="radio" name="transactionType" id="transactionTypeDeposit" value="deposit" defaultChecked />
                    <label htmlFor="transactionTypeWithdrawal">Withdrawal</label>
                    <input type="radio" name="transactionType" id="transactionTypeWithdrawal" value="withdrawal" />
                </div>
                <button>Add</button>
            </form>

        </div>
    )
}

export default AddTransaction