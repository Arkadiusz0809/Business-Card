import { takeLatest, delay, call, put } from "redux-saga/effects";
import { getRepositories } from "./PersonalHomepageApi";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./PersonalHomepageSlice";


const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay);
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (erorr) {
        yield put(fetchRepositoriesError());
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}

