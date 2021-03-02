

const deleteFunction = (state, action) => (
    state.incomeProcessings.filter(
        incomeProcessing => incomeProcessing.id !== action.payload
    )
)

export default deleteFunction;