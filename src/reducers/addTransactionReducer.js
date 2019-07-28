export default (transactions = [], action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            return [...transactions, action.payload]
        default:
            return transactions
    }
}