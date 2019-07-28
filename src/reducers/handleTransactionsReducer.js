export default (transactions = [], action) => {
    //console.log(action.payload)
    switch (action.type){
        case 'ADD_TRANSACTION':
            return [...transactions, action.payload]
        default:
            return transactions
    }
}