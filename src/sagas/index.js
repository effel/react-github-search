import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { foldersReceived } from '../actions';

function* fetchGithubFolders() {
    try {
        const userData = yield select();
        async function fetchFolders() {
            let githubResponse = await fetch(`https://api.github.com/users/${userData.value}/repos`);
            return githubResponse.json();
        }
        const responseResult = yield call(fetchFolders);
        yield put(foldersReceived(responseResult));
    }
    catch (e) {
        console.log(e);
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