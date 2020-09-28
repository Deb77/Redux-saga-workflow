import React from "react";
import { connect } from "react-redux";
import { loadUpdateUsername } from "../store/actions";

const Button = ({ update }) => {
  const onClick = (e) => {
    e.preventDefault();
    update();
  };
  return (
    <button className="w3-btn w3-blue-grey" onClick={(e) => onClick(e)}>
      Change Username
    </button>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    update: () => {
      dispatch(loadUpdateUsername());
    },
  };
};

export default connect(null, mapDispatchToProps)(Button);
