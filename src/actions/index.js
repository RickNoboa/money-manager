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