import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { THEME } from "../root/type";
import { SUCCESS, FAILURE } from "store/utils/async_types";

const fetchUserApi = (payload) => {
  return payload + 1000;
};

// saga function
function* changeTheme(action) {
  try {
    yield put({
      type: SUCCESS(THEME.changeTheme),
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: FAILURE(THEME.changeTheme),
      payload: error,
    });
  }
}

export function* ThemeWorker() {
  yield takeLatest(THEME.changeTheme, changeTheme);
}

function* ThemeWatcher() {
  yield all([ThemeWorker()]);
}

export default ThemeWatcher;
