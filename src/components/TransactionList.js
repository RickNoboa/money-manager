import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTransactions, deleteTransaction} from "../actions";
import TransactionItem from "./TransactionIItem";
import styled from 'styled-components'

const ListWrapper = styled.div`
    width:100%
    margin-top:20px;
    font-size:15px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    overflow:hidden;
`

class TransactionList extends Component {

    componentDidMount() {
        this.props.fetchTransactions()
    }

    handleDeleteSubmit = (id, amount, type) => {
        this.props.deleteTransaction(id, amount, type)
    }

    renderList = () => {
        if(this.props.transactions.length){
            return this.props.transactions.map(transaction => <TransactionItem key={transaction.id} id={transaction.id} name={transaction.name} amount={transaction.amount} type={transaction.type} handleDeleteSubmit={this.handleDeleteSubmit} />)
        }
        return <p>There are no transactions</p>
    }

    render(){
        return (
            <ListWrapper>
                {this.renderList()}
            </ListWrapper>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { transactions: state.transactions }
}

export default connect(mapStateToProps, {fetchTransactions, deleteTransaction})(TransactionList)