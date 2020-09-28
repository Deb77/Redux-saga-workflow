import { GET_DATA, CHANGE_USERNAME } from "./constants";

export const initialState = { username: "" };

/* eslint-disable default-case, no-param-reassign */
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state.username = action.username;
      break;
    case CHANGE_USERNAME:
      state.username = action.username;
      break;
  }
  return state;
};

export default inputReducer;
