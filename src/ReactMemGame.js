import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as gameActions from "./redux/actions/gameActions";
import ChooseDifficulty from "./ChooseDifficulty/ChooseDifficulty.js";
import CardsContainer from "./CardsContainer/CardsContainer.js";
import "./ReactMemGame.css";

const ReactMemGame = props => {
  useEffect(() => {
    if (props.timerIsActive) {
      const timerId = setInterval(() => {
        props.dispatch(
          gameActions.setSecondsForTimer(
            Math.round((new Date() - props.timeOfStart) / 1000),
          ),
        );
      }, 1000);
      return () => clearInterval(timerId);
    }
  });

  return (
    <>
      {props.showRestartButton ? (
        <RestartButton />
      ) : props.numberOfCards ? (
        <CardsContainer />
      ) : (
        <ChooseDifficulty />
      )}
    </>
  );
};

ReactMemGame.propTypes = {
  numberOfCards: PropTypes.number,
  timeOfStart: PropTypes.instanceOf(Date),
  timerIsActive: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  showRestartButton: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    numberOfCards: state.numberOfCards,
    timeOfStart: state.timeOfStart,
    timerIsActive: state.timerIsActive,
    showRestartButton: state.showRestartButton,
  };
}

export default connect(mapStateToProps)(ReactMemGame);
