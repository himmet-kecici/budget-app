

export const deleteIncome = (state, action) => (
    state.incomeProcessings.filter(
        incomeProcessing => incomeProcessing.id !== action.payload
    )
)
export const deleteExpense = (state, action) => (
    state.expenseProcessings.filter(
        expenseProcessing => expenseProcessing.id !== action.payload
    )
)





