export const fetchTransactions = () => async dispatch => {
    fetch('./transactions.json')
        .then(response => response.json())
        .then(response => response.map(r => dispatch(addTransaction(r.name, r.amount, r.id))))
}
export const addTransaction = (name, amount, id) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            id: id,
            name: name,
            amount: amount
        }
    }
}