import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import { callGetData } from "./store/actions";

const App = ({ setUserState, username }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setUserState();
  }, []);

  return (
    <div>
      <form className="w3-container w3-card-4">
        <h1>{username}</h1>
        <br />
        <InputField />
        <br />
        <Button />
        <br />
      </form>
    </div>
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
