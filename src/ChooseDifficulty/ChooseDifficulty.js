import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./ChooseDifficulty.css";
import { onDifficultyPick, onDifficultySubmit } from "../redux/actions/gameActions";

const ChooseDifficulty = ({ dispatch, difficulties, selectedDifficulty, isDifficultyVisible, isButtonEnabled }) => {
  const difficultyOnChange = event => {
    dispatch(
      onDifficultyPick(parseInt(event.target.value, 10)),
    );
  };

  const onSubmit = () => {
    dispatch(onDifficultySubmit(selectedDifficulty));
  };
  return (
    <div
      className="modal"
      style={{ visibility: isDifficultyVisible ? "visible" : "hidden" }}
    >
      <div className="modalContent">
        <p>Please, choose a level:</p>
        <div className="radio-buttons">
          {difficulties.map(({ title, value }, index) => (
            <div className="radioContainer" key={index}>
              <input
                className="radio-button"
                type="radio"
                name="difficulty"
                id={title}
                value={value}
                onChange={difficultyOnChange}
                checked={selectedDifficulty === value}
              />
              <label htmlFor={title}>{title}</label>
            </div>
          ))}
        </div>
        <input
          type="submit"
          value="Start"
          id="submit"
          disabled={!isButtonEnabled}
          onClick={onSubmit}
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

function mapStateToProps({ difficulties, selectedDifficulty, isDifficultyVisible, isButtonEnabled }) {
  return {
    isDifficultyVisible,
    isButtonEnabled,
    selectedDifficulty,
    difficulties,
  };
}
export default connect(mapStateToProps)(ChooseDifficulty);
