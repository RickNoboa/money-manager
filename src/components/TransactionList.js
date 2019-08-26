import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from "../actions";
import TransactionItem from "./TransactionIItem";
import styled from 'styled-components'
import Scrollbar from 'react-scrollbars-custom'

const ListWrapper = styled.div`
    width:100%
    height:222px;
    overflow:hidden;
    margin-top:20px;
    border-radius:5px;
    overflow:hidden;
`

class TransactionList extends Component {

    componentDidMount() {
        this.props.fetchTransactions()
    }

    renderList = () => {
        if(this.props.transactions.length){
            return this.props.transactions.map(transaction => <TransactionItem key={transaction.id} id={transaction.id} name={transaction.name} amount={transaction.amount} type={transaction.type} handleDeleteSubmit={this.props.handleDeleteSubmit} />)
        }
        return <p>There are no transactions</p>
    }

    render(){
        return (
            <ListWrapper>
                <Scrollbar>
                    {this.renderList()}
                </Scrollbar>
            </ListWrapper>
        )
    }
}

const mapStateToProps = state => {
    return { transactions: state.transactions }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionList)