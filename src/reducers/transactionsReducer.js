export default (transactions = [], action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            return [action.payload, ...transactions]
        case 'DELETE_TRANSACTION':
            return transactions.filter(item => item.id !== action.payload.id)
        default:
            return transactions
    }
}