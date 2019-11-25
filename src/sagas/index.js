import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { foldersReceived, setError } from '../actions';

async function fetchFolders(userDataVal) {
    let githubResponse = await fetch(`https://api.github.com/users/${userDataVal}/repos`);
    return githubResponse.json();
}

function* fetchGithubFolders() {
    try {
        const userData = yield select();
        const responseResult = yield call(fetchFolders(userData.value));
        if (Array.isArray(responseResult)) {
            yield put(foldersReceived(responseResult));
        } else {
            yield put(setError());
        }
    }
    catch (e) {
        yield put(setError());
    }
}
function* actionWatcher() {
    yield takeLatest('GET_USER_REPS', fetchGithubFolders)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}