import { GET_DATA, CHANGE_USERNAME, UPDATE_USERNAME } from "./constants";

export const initialState = { username: "" };
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state.username = action.username;
      break;
    case CHANGE_USERNAME:
      console.log(action.username);
      state.username = action.username;
      break;
  }
  return state;
};

export default inputReducer;
