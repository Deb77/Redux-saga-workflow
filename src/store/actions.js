import {
  CALL_GET_DATA,
  GET_DATA,
  CALL_CHANGE_USERNAME,
  CHANGE_USERNAME,
  CALL_UPDATE_USERNAME,
  UPDATE_USERNAME,
} from "./constants";

export const callGetData = () => ({
  type: CALL_GET_DATA,
});

export const getData = (username) => ({
  type: GET_DATA,
  username,
});

export const loadChangeUsername = () => ({
  type: CALL_CHANGE_USERNAME,
});

export const changeUsername = (username) => ({
  type: CHANGE_USERNAME,
  username,
});

export const loadUpdateUsername = () => ({
  type: CALL_UPDATE_USERNAME,
});

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});
