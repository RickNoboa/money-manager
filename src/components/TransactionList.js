import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateKey} from "../helpers/generateKey";
import AddTransaction from "./AddTransaction";
import {addTransaction, fetchTransactions} from "../actions";

class TransactionList extends Component {

    componentDidMount() {
        this.props.fetchTransactions()
    }

    renderList = () => {
        if(this.props.transactions.length){
            return this.props.transactions.map(transaction => {
                return (
                    <div className="item" key={transaction.id}>
                        <div className="content">
                            <p>{transaction.name} - ${parseFloat(transaction.amount).toFixed(2)}</p>
                        </div>
                    </div>
                )
            })
        }
        return <p>There are no transactions</p>
    }

    handleSubmit = e => {
        e.preventDefault()
        const key = generateKey()
        this.props.addTransaction(e.target.transactionName.value, e.target.transactionAmount.value, key)
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