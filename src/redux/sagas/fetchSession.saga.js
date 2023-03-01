import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchOneSession(action) {
  try {
    const session = yield axios.get(`/api/session/${action.payload}`);
    console.log("get one:", session.data);
    yield put({ type: "SET_SESSION", payload: session.data });
  } catch {
    console.log("get one error");
  }
}
function* sessionsSaga() {
  yield takeEvery("FETCH_SESSION", fetchOneSession);
}
export default sessionsSaga;
