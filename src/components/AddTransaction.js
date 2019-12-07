import React, {Component} from 'react'
import styled from 'styled-components'
import './styles.css'
import depositIcon from '../images/icon_deposit.png'
import withdrawalIcon from '../images/icon_withdrawal.png'
import datepickerIcon from '../images/icon_datepicker.png'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FormWrapper = styled.div`
    width:94%;
    padding:10px 3%;
    background:rgba(255, 255, 255, 0.03);
    border-radius:5px;
    margin-top:20px;
`
const Input = styled.input`
    width:96%;
    border:0;
    color:#fff;
    background:#222;
    font-size:15px;
    padding:5px 2%;
    margin-bottom:5px;
    border-radius:5px;
`
const TypeSwitch = styled.div`
    max-width:125px;
    text-align:center;
    margin-top:10px;
    position:relative;
    input {
        display:none;
    }
    label {
        position:relative;
        padding-left: 50px;
        cursor:pointer;
        transition: all .3s ease-in-out 0s;
        &:before,
        &:after {
            content:'';
            position:absolute;
            top: 50%;
            transition: inherit;
        }
        &:before {            
            left: 7px;
            z-index: 1;
            width: 17px;
            content: '';
            height: 17px;
            border-radius: 50%;
            margin-top: -11.5px;
            background-color: #737373;
        }
        &:after {
            left: 0;
            width: 50px;
            height: 23px;
            margin-top: -17.5px;
            background: #222;
            border-radius: 35px;
            border: 3px solid #222;
        }
    }
    input:checked + label:before {
        left:33px;
    }
    &:before,
    &:after {
        content:'';
        position:absolute;
        width:25px;
        height:25px;
        top:-7px;
    }
    &:before {
        background:url(${withdrawalIcon}) 0 0/25px auto no-repeat;
        left:10px;
    }
    &:after {
        background:url(${depositIcon}) 0 0/25px auto no-repeat;
        left:90px;
    }
`
const StyledDatePicker = styled(DatePicker)`
    width:96%;
    border:0;
    color:#fff;
    background:#222 url(${datepickerIcon}) 98% 3px/20px auto no-repeat;
    font-size:15px;
    padding:5px 2%;
    border-radius:5px;
    position:relative;
    cursor:pointer;
`

class AddTransaction extends Component {
    state = {
        startDate: new Date()
    }

    handleChange = date => {
        this.setState({
            startDate: date
        })
    }

    render() {
        return (
            <FormWrapper>
                <form id="addTransaction" onSubmit={this.props.handleAddSubmit}>
                    <Input type="text" name="transactionName" placeholder="Name" />
                    <Input type="text" name="transactionAmount" placeholder="Amount" />
                    <StyledDatePicker selected={this.state.startDate} onChange={this.handleChange} />
                    <TypeSwitch>
                        <input type="checkbox" id="transactionType" name="transactionType" />
                        <label htmlFor="transactionType">&nbsp;</label>
                    </TypeSwitch>
                    <button>Add</button>
                </form>
            </FormWrapper>
        )

    }

}

export default AddTransaction