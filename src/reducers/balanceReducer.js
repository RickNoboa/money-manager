export default (balance = "0", action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            if(action.payload.type === 'deposit'){
                let newBalance = parseFloat(balance) + parseFloat(action.payload.amount)
                return parseFloat(newBalance).toFixed(2)
            } else {
                let newBalance = parseFloat(balance) - parseFloat(action.payload.amount)
                return parseFloat(newBalance).toFixed(2)
            }
        case 'DELETE_TRANSACTION':
            if(action.payload.type === 'deposit') {
                let newBalance = parseFloat(balance) - parseFloat(action.payload.amount)
                return parseFloat(newBalance).toFixed(2)
            } else {
                let newBalance = parseFloat(balance) + parseFloat(action.payload.amount)
                return parseFloat(newBalance).toFixed(2)
            }
        default:
            return balance
    }
}
