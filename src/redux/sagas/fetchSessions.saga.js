import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchAllSessions() {
  try {
    const sessions = yield axios.get("/api/sessions");
    console.log("get all:", sessions.data);
    yield put({ type: "SET_SESSIONS", payload: sessions.data });
  } catch {
    console.log("get all error");
  }
}
function* sessionsSaga() {
  yield takeEvery("FETCH_SESSIONS", fetchAllSessions);
}
export default sessionsSaga;
