import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Timer.css";

const Timer = ({ secondsForTimer }) => {
  let minutes = Math.floor(secondsForTimer / 60);
  if (minutes < 10) minutes = `0${minutes}`;
  let seconds = secondsForTimer % 60;
  if (seconds < 10) seconds = `0${seconds}`;
  return <div id="timer">{`${minutes}:${seconds}`}</div>;
};

Timer.propTypes = {
  secondsForTimer: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return { secondsForTimer: state.secondsForTimer };
}

export default connect(mapStateToProps)(Timer);
