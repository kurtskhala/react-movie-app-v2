import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const GuestGuard = ({ children }) => {
  const { state } = useAppContext();
  return <>{!state.isUserLoggedIn && children}</>;
};

export default GuestGuard;
