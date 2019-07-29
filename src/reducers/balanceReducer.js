export default (balance = '0', action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            if(action.payload.type === 'deposit'){
                return parseFloat(balance) + parseFloat(action.payload.amount)
            } else {
                return parseFloat(balance) - parseFloat(action.payload.amount)
            }
        case 'DELETE_TRANSACTION':
            return parseFloat(balance) - parseFloat(action.payload.amount)
        default:
            return balance
    }
}
