import React from 'react'

const AddTransaction = ({handleSubmit}) => {
    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="transactionName" />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="text" name="transactionAmount" />
                </div>
                <button>Add</button>
            </form>

        </div>
    )
}

export default AddTransaction