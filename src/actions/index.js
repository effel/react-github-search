export const setUserName = (value) => ({
    type: 'SET_USER_NAME',
    value
});

export const getUserReps = () => ({
    type: 'GET_USER_REPS',
});

export const foldersReceived = (json) => ({
    type: 'FOLDERS_RECEIVED',
    json
});

export const setError = () => ({
    type: 'ERROR'
});