import {
  all,
  fork,
} from "redux-saga/effects";

import OverviewWatcher from "./theme";

export default function* rootSaga() {
  yield all([
    fork(OverviewWatcher),
  ]);
}
