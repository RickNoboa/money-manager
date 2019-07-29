import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateKey} from "../helpers/generateKey";
import AddTransaction from "./AddTransaction";
import {addTransaction, fetchTransactions} from "../actions";
import TransactionItem from "./TransactionIItem";

class TransactionList extends Component {

    componentDidMount() {
        this.props.fetchTransactions()
    }

    renderList = () => {
        if(this.props.transactions.length){
            return this.props.transactions.map(transaction => <TransactionItem key={transaction.id} name={transaction.name} amount={transaction.amount} type={transaction.type} />)
        }
        return <p>There are no transactions</p>
    }

    handleSubmit = e => {
        e.preventDefault()
        const key = generateKey()
        this.props.addTransaction(e.target.transactionName.value, e.target.transactionAmount.value, key, e.target.transactionType.value)
    }

    render(){
        return (
            <div>
                {this.renderList()}
                <AddTransaction handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { transactions: state.transactions }
}

export default connect(mapStateToProps, {addTransaction, fetchTransactions})(TransactionList)