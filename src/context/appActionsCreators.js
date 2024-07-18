import appContextActions from "./appActions";

export const signInUser = (payload) => {
  return {
    type: appContextActions.signInUser,
    payload,
  };
};

export const signOutUser = () => {
  return {
    type: appContextActions.signOutUser,
  };
};
