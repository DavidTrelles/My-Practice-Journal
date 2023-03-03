import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
function* postSession(action) {
  //need to upack the payload and pass it along as data to
  //server OR you can pass it along and then unpack it on the back end,
  //but I'm exhuasted. Pick it up here tomorrow or in a few hours
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
