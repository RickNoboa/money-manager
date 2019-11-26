import React from 'react'
import styled from 'styled-components'
import deleteBtn from '../images/deleteBtn.png'

const ItemWrapper = styled.div`
    font-size:14px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:94%;
    padding:10px 3%;
    margin-bottom:1px;
    background:rgba(255, 255, 255, 0.03);
`
const ItemRowLeft = styled.div``
const ItemRowRight = styled.div`
    span {
        display:inline-block;
    }
    span {
        &.amount {
            margin-right:10px;
        }
        &.deposit {
            color:#52d29a;
        }
        &.withdrawal {
            color:#eb7655;
        }
        &.deleteTrans {
            text-indent:-9999px;
            width:12px;
            height:14px;
            background:url(${deleteBtn}) 0 0/12px auto no-repeat;
            cursor:pointer;
        }
    }
`

const TransactionItem = ({name, amount, type, id, handleDeleteSubmit}) => {
    return (
        <ItemWrapper>
            <ItemRowLeft>
                <span>{name}</span>
            </ItemRowLeft>
            <ItemRowRight>
                <span className={type === 'deposit' ? 'amount deposit' : 'amount withdrawal'}>{type === 'deposit' ? '+' : '-'}${amount}</span>
                <span className="deleteTrans" onClick={() => handleDeleteSubmit(id, amount, type)}>Delete</span>
            </ItemRowRight>
        </ItemWrapper>
    )
}

export default TransactionItem