function reducer(state, action) {
    switch (action.type) {
        case 'update_user_role':
            return {
                ...state,
                role: action.user_role,
            }
        default:
            return state;
    }
}
export default reducer;