import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CALL_CHANGE_USERNAME, CALL_GET_DATA } from "./constants";
import { changeUsername, updateUsername, getData } from "./actions";
import axios from "axios";

export function* setUsername(action) {
  yield put(changeUsername(action.username));
}

export function getUsername() {
  return axios
    .get("http://localhost:3000/user")
    .then((res) => res.data[0].username);
}

export function* setData() {
  const username = yield call(getUsername);
  yield put(getData(username));
}

export function* changeData(action) {
  console.log(action.username);
  yield put(changeData(action.username));
}

export default function* userName() {
  yield takeLatest(CALL_GET_DATA, setData);
  yield takeEvery(CALL_CHANGE_USERNAME, setUsername);
}
