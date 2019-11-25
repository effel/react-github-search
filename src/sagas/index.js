import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { foldersReceived, setError } from '../actions';

function* fetchGithubFolders() {
    try {
        const userData = yield select();
        async function fetchFolders() {
            let githubResponse = await fetch(`https://api.github.com/users/${userData.value}/repos`);
            return githubResponse.json();
        }
        const responseResult = yield call(fetchFolders);
        if (Array.isArray(responseResult)) {
            yield put(foldersReceived(responseResult));
        } else {
            yield put(setError());
        }
    }
    catch (e) {
        yield put(setError);
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