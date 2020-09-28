import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  CALL_CHANGE_USERNAME,
  CALL_GET_DATA,
  CALL_UPDATE_USERNAME,
} from "./constants";
import { changeUsername, getData } from "./actions";
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
  yield put(changeData(action.username));
}

export function updateUser(username) {
  axios
    .put("http://localhost:3000/user/123", { name: username })
    .then(() => alert("Username updated"));
}

export function* updateData() {
  const getItems = (state) => state.username;
  const username = yield select(getItems);
  yield call(updateUser, username);
}

export default function* userName() {
  yield takeLatest(CALL_GET_DATA, setData);
  yield takeEvery(CALL_CHANGE_USERNAME, setUsername);
  yield takeLatest(CALL_UPDATE_USERNAME, updateData);
}
