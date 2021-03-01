const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incomeProcessings: [action.payload, ...state.incomeProcessings]
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseProcessings: [action.payload, ...state.expenseProcessings]
            }
        default:
            return state
    }

}
export default AppReducer