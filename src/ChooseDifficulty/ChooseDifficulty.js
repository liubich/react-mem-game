import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./ChooseDifficulty.css";
import * as gameActions from "../redux/actions/gameActions";

const ChooseDifficulty = props => {
  const difficultyOnChange = event => {
    props.dispatch(
      gameActions.onDifficultyPick(parseInt(event.target.value, 10)),
    );
  };

  const onDifficultySubmit = () => {
    props.dispatch(gameActions.onDifficultySubmit(props.selectedDifficulty));
  };
  return (
    <div
      className="modal"
      style={{ visibility: props.isDifficultyVisible ? "visible" : "hidden" }}
    >
      <div className="modalContent">
        <p>Please, choose a level:</p>
        <div className="radio-buttons">
          {props.difficulties.map(({ title, value }, index) => (
            <div className="radioContainer" key={index}>
              <input
                className="radio-button"
                type="radio"
                name="difficulty"
                id={title}
                value={value}
                onChange={difficultyOnChange}
                checked={props.selectedDifficulty === value}
              />
              <label htmlFor={title}>{title}</label>
            </div>
          ))}
        </div>
        <input
          type="submit"
          value="Start"
          id="submit"
          disabled={!props.isButtonEnabled}
          onClick={onDifficultySubmit}
        />
      </div>
    </div>
  );
};

ChooseDifficulty.propTypes = {
  isDifficultyVisible: PropTypes.bool.isRequired,
  difficulties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  selectedDifficulty: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  isButtonEnabled: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isDifficultyVisible: state.isDifficultyVisible,
    isButtonEnabled: state.isButtonEnabled,
    selectedDifficulty: state.selectedDifficulty,
    difficulties: state.difficulties,
  };
}
export default connect(mapStateToProps)(ChooseDifficulty);
