import React, {Fragment} from 'react'
import TransactionList from "./TransactionList";
import {connect} from 'react-redux'

const Account = ({balance}) => {

    return (
        <Fragment>
            <TransactionList />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Account)