import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChooseDifficulty.css';

const ChooseDifficulty = (props) => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const difficultyOnChange = (event) => {
    setButtonEnabled(true);
    props.changeDifficulty(parseInt(event.target.value, 10));
  };
    return (
      <div className = "modal" style = {{visibility: props.isDifficultyVisible ? "visible" : "hidden",}}>
        <div className = "modalContent">
          <p>Please, choose a level:</p>
          {
            props.difficulties.map(({title, value}) => (
              <div className = "radioContainer">
              <input 
                type = "radio"
                name = "difficulty"
                id = {title}
                value = {value}
                onChange = {difficultyOnChange}
                checked = {props.selectedDifficulty === value}>
              </input>
              <label htmlFor = {title}>{title}</label>
          </div>
            ))
          }
          <input type="submit" value="Start" id="submit" disabled = {!isButtonEnabled} onClick = {props.onDifficultySubmit}>
          </input>
        </div>
      </div>
    )
  }
  ChooseDifficulty.propTypes = {
    isDifficultyVisible: PropTypes.bool.isRequired,
    difficultyOnChange: PropTypes.func.isRequired,
    isButtonEnabled: PropTypes.bool.isRequired,
    buttonOnClick: PropTypes.func.isRequired
  }
  export default ChooseDifficulty;