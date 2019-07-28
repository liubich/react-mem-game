import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import restartGame from "../redux/actions/gameActions";
import "./RestartButton.css";

const RestartButton = props => {
  const restartButtonOnClick = () => {
    props.dispatch(restartGame);
  };
  return (
    <button className="restart-button" onClick={restartButtonOnClick}>
      Restart
    </button>
  );
};
RestartButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect(RestartButton);
