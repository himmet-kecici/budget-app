const AppReducer = (state, action) => {
    switch (action.type) {
        case test:
            return {
                ...state
            }
        default:
            return state
    }

}
export default AppReducer