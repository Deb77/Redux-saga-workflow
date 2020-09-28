import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import { callGetData } from "./store/actions";

const App = ({ setUserState, username }) => {
  useEffect(() => {
    setUserState();
  }, [setUserState]);

  return (
    <form className="w3-container w3-card-4">
      <br />
      <InputField />
      <br />
      <Button />
      <br />
    </form>
  );
};

export function mapDispatchToProps(dispatch) {
  return {
    setUserState: () => {
      dispatch(callGetData());
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
