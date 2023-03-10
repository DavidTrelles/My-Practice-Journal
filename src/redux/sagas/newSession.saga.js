import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
function* postSession(action) {
  try {
    console.log("in postSession");
    yield axios.post("/api/sessions/", action.payload);
    yield put({ type: "FETCH_SESSIONS" });
    console.log(action.payload);
  } catch (error) {
    console.log("Error with session post:", error);
  }
}
function* newSessionSaga() {
  yield takeEvery("POST_SESSION", postSession);
}
export default newSessionSaga;
