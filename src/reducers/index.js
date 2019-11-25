const reducer = (state = {}, action) => {
    switch (action.type) {
    case 'ERROR':
        return { ...state, hasError: true, loading: false };
    case 'GET_USER_REPS':
        return { ...state, loading: true };
    case 'SET_USER_NAME':
        return { ...state, value: action.value};
    case 'FOLDERS_RECEIVED':
        return { ...state, items: action.json, loading: false, hasError: false}
    default:
        return state;
    }
};
export default reducer;