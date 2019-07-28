export default (balance = '0', action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            return parseFloat(balance) + parseFloat(action.payload.amount)
        default:
            return balance
    }
}
