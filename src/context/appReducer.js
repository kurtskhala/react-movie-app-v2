import { parseToken, toggleLocalStorage } from "../utils";
import appContextActions from "./appActions";

export const initialState = {
  isUserLoggedIn: false,
  token: "",
  user: null,
};

export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case appContextActions.signInUser: {
      toggleLocalStorage(payload);
      const user = parseToken(payload);
      return { ...state, isUserLoggedIn: true, token: payload, user };
    }
    case appContextActions.signOutUser: {
      toggleLocalStorage();
      return { ...state, isUserLoggedIn: false, token: "", user: null };
    }
    default:
      return state;
  }
};
