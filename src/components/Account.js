import React from 'react'
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import {connect} from 'react-redux'
import styled from 'styled-components'
import {generateKey} from "../helpers/generateKey";
import {addTransaction, deleteTransaction} from "../actions";

const AccountWrapper = styled.div`
    width:92%;
    padding:10px 4%;
    display:flex;
    flex-direction:column;
`
const AccountBalanceDisplay = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:94%;
    height:40px;
    padding:0 3%;
    background:rgba(255, 255, 255, 0.03);
    font-size:15px;
    border-radius:5px;
`
const BalanceFigure = styled.span`
    &.positive {
        color:#52d29a;
    }
    &.negative {
        color:#eb7655;
    }
`

const Account = ({balance, addTransaction, deleteTransaction}) => {

    const resetAddTransactionForm = () => {
        document.getElementById("addTransaction").reset()
    }

    const handleAddSubmit = e => {
        e.preventDefault()

        let key = generateKey()
        let transactionAmount = e.target.transactionAmount.value.replace('$', '')
        let transactionType
        if(e.target.transactionType.checked){transactionType = 'deposit'} else {transactionType = 'withdrawal'}

        addTransaction(e.target.transactionName.value, transactionAmount, key, transactionType)
        resetAddTransactionForm()
    }

    const handleDeleteSubmit = (id, amount, type) => {
        deleteTransaction(id, amount, type)
    }

    return (
        <AccountWrapper>
            <AccountBalanceDisplay>
                <span>Balance:</span>
                <BalanceFigure className={parseInt(balance) >= 0 ? 'positive' : 'negative'}>{parseInt(balance) < 0 ? '-' : ''}${balance.replace('-', '')}</BalanceFigure>
            </AccountBalanceDisplay>
            <TransactionList handleDeleteSubmit={handleDeleteSubmit} />
            <AddTransaction handleAddSubmit={handleAddSubmit} />
        </AccountWrapper>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps, {addTransaction, deleteTransaction})(Account)