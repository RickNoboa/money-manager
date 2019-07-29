import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateKey} from "../helpers/generateKey";
import AddTransaction from "./AddTransaction";
import {fetchTransactions, addTransaction, deleteTransaction} from "../actions";
import TransactionItem from "./TransactionIItem";

class TransactionList extends Component {

    componentDidMount() {
        this.props.fetchTransactions()
    }

    renderList = () => {
        if(this.props.transactions.length){
            return this.props.transactions.map(transaction => <TransactionItem key={transaction.id} id={transaction.id} name={transaction.name} amount={transaction.amount} type={transaction.type} handleDeleteSubmit={this.handleDeleteSubmit} />)
        }
        return <p>There are no transactions</p>
    }

    handleAddSubmit = e => {
        e.preventDefault()
        const key = generateKey()
        this.props.addTransaction(e.target.transactionName.value, parseFloat(e.target.transactionAmount.value), key, e.target.transactionType.value)
    }

    handleDeleteSubmit = (id, amount, type) => {
        this.props.deleteTransaction(id, amount, type)
    }

    render(){
        return (
            <div>
                {this.renderList()}
                <AddTransaction handleAddSubmit={this.handleAddSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { transactions: state.transactions }
}

export default connect(mapStateToProps, {fetchTransactions, addTransaction, deleteTransaction})(TransactionList)