import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    width:94%;
    padding:0 3%;
    background:rgba(255, 255, 255, 0.03);
    border-radius:5px;
    margin-top:20px;
`

const AddTransaction = ({handleAddSubmit}) => {
    return (
        <FormWrapper>
            <form onSubmit={handleAddSubmit}>
                <div>
                   <input type="text" name="transactionName" placeholder="Name" />
                </div>
                <div>
                    <input type="text" name="transactionAmount" placeholder="Amount" />
                </div>
                <div>
                    <label htmlFor="transactionTypeDeposit">Deposit</label>
                    <input type="radio" name="transactionType" id="transactionTypeDeposit" value="deposit" defaultChecked />
                    <label htmlFor="transactionTypeWithdrawal">Withdrawal</label>
                    <input type="radio" name="transactionType" id="transactionTypeWithdrawal" value="withdrawal" />
                </div>
                <button>Add</button>
            </form>
        </FormWrapper>
    )
}

export default AddTransaction