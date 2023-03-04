import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
function* editSession(action) {
  try {
    console.log("in postSession");
    yield axios.post("/api/sessions/", action.payload);
    yield put({ type: "FETCH_SESSIONS" });
    console.log(action.payload);
  } catch (error) {
    console.log("Error with session edit:", error);
  }
}
function* editSessionSaga() {
  yield takeEvery("EDIT_SESSION", editSession);
}
export default editSessionSaga;
