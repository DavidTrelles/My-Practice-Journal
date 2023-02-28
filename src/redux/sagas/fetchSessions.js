import axios from "axios";
import { put } from "redux-saga/effects";

function* fetchAllSessions() {
  try {
    const movies = yield axios.get("/api/sessions");
    console.log("get all:", sessions.data);
    yield put({ type: "SET_SESSIONS", payload: sessions.data });
  } catch {
    console.log("get all error");
  }
}
