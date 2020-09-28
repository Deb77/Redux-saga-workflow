import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectUsername = (state) => state || initialState;

export const makeUserData = () =>
  createSelector(selectUsername, (state) => state.username);
