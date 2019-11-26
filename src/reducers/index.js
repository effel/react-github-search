const reducer = (state = {}, action) => {
    switch (action.type) {
    case 'ERROR':
        return { ...state, hasError: true, loading: false };
    case 'GET_USER_REPS':
        return { ...state, loading: true, hasError: false };
    case 'SET_USER_NAME':
        return { ...state, value: action.value};
    case 'FOLDERS_RECEIVED':
        return { ...state, items: action.json, loading: false}
    default:
        return state;
    }
};
export default reducer;