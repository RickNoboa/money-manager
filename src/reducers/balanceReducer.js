export default (balance = 0, action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            if(action.payload.type === 'deposit'){
                return balance + action.payload.amount
            } else {
                return balance - action.payload.amount
            }
        case 'DELETE_TRANSACTION':
            if(action.payload.type === 'deposit')
                return balance - action.payload.amount
            else {
                return balance + action.payload.amount
            }
        default:
            return balance
    }
}
