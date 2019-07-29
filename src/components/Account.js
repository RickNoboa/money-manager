import React from 'react'
import TransactionList from "./TransactionList";
import {connect} from 'react-redux'

const Account = ({balance}) => {

    return (
        <div>
            <TransactionList />
            <p>Current balance: ${parseFloat(balance).toFixed(2)}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Account)