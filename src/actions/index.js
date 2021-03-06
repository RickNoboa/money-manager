export const fetchTransactions = () => async dispatch => {
    fetch('./transactions.json')
        .then(response => response.json())
        .then(response => response.map(r => dispatch(addTransaction(r.name, r.date, r.amount, r.id, r.type))))
}
export const addTransaction = (name, date, amount, id, type) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            id: id,
            date: date,
            name: name,
            amount: amount,
            type: type
        }
    }
}
export const deleteTransaction = (id, amount, type) => {
    return {
        type: 'DELETE_TRANSACTION',
        payload: {
            id: id,
            amount: amount,
            type: type
        }
    }
}