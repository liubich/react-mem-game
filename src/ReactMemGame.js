import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSecondsForTimer } from "./redux/actions/gameActions";
import ChooseDifficulty from "./ChooseDifficulty/ChooseDifficulty.js";
import CardsContainer from "./CardsContainer/CardsContainer.js";
import RestartButton from "./RestartButton/RestartButton.js"
import "./ReactMemGame.css";

const ReactMemGame = ({ dispatch, timeOfStart, timerIsActive, showRestartButton, numberOfCards }) => {
  useEffect(() => {
    if (timerIsActive) {
      const timerId = setInterval(() => {
        dispatch(
          setSecondsForTimer(
            Math.round((new Date() - timeOfStart) / 1000),
          ),
        );
      }, 1000);
      return () => clearInterval(timerId);
    }
  });

  return (
    <>
      {showRestartButton ? (
        <RestartButton />
      ) : numberOfCards ? (
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

function mapStateToProps({ numberOfCards, timeOfStart, timerIsActive, showRestartButton }) {
  return {
    numberOfCards,
    timeOfStart,
    timerIsActive,
    showRestartButton,
  };
}

export default connect(mapStateToProps)(ReactMemGame);
