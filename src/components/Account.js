import React from 'react'
import TransactionList from "./TransactionList";
import {connect} from 'react-redux'

const Account = ({balance}) => {

    return (
        <div>
            <TransactionList />
            <p>Current balance: ${balance}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Account)