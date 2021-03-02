import deleteFunction from './utils'

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
        case "DELETE_PROCESSING":
            return {
                ...state,
                incomeProcessings: deleteFunction(state, action),
                expenseProcessings: deleteFunction(state, action)

            }
        default:
            return state
    }

}
export default AppReducer