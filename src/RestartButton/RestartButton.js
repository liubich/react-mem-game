import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { restartGame } from "../redux/actions/gameActions";
import Timer from "../Timer/Timer.js";
import "./RestartButton.css";

const RestartButton = ({ dispatch }) => {
  const restartButtonOnClick = () => {
    dispatch(restartGame());
  };
  return (
    <div className="restart-container">
      <h1 className="restart-time-caption">Your time is:</h1>
      <Timer />
      <button className="restart-button" onClick={restartButtonOnClick}>
        Restart
      </button>
    </div>
  );
};
RestartButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(RestartButton);
