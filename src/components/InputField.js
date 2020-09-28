import React, { useState, useEffect } from "react";
import { changeUsername } from "../store/actions";
import { connect } from "react-redux";

const InputField = ({ changeUserState }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    changeUserState(text);
  }, [text, changeUserState]);

  return (
    <input
      className="w3-input w3-border w3-animate-input"
      type="text"
      onChange={(e) => setText(e.target.value)}
      style={{ width: "30%" }}
    />
  );
};

export function mapDispatchToProps(dispatch) {
  return {
    changeUserState: (username) => {
      dispatch(changeUsername(username));
    },
  };
}

export default connect(null, mapDispatchToProps)(InputField);
