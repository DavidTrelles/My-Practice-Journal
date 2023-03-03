import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* deleteSession(action) {
  try {
    yield axios.delete(`/api/sessions/${action.payload}`);
    console.log("Delete:", action.payload);
    yield put({ type: "FETCH_SESSIONS" });
  } catch {
    console.log("delete error");
  }
}
function* deleteSaga() {
  yield takeEvery("DELETE", deleteSession);
}
export default deleteSaga;
