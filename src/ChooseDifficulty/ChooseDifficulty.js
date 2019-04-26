import React, { useState } from 'react';
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
            props.difficulties.map((diffic) => (
              <div className = "radioContainer">
              <input 
                type = "radio" 
                name = "difficulty" 
                id = {diffic.title} 
                value = {diffic.value} 
                onChange = {difficultyOnChange}
                checked = {props.selectedDifficulty === diffic.value}> 
              </input>
              <label htmlFor = {diffic.title}>{diffic.title}</label>
          </div>
            ))
          }


          {/* <div className = "radioContainer">
              <input type = "radio" name = "difficulty" id = "Easy" value = "12" onChange = {props.difficultyOnChange}>
              </input>
              <label htmlFor = "Easy">Easy</label>
          </div>
          <div className = "radioContainer">
              <input type = "radio" name = "difficulty" id = "Medium" value = "20" onChange = {props.difficultyOnChange}>
              </input>
              <label htmlFor="Medium">Medium</label>
          </div>
          <div className="radioContainer">
              <input type="radio" name="difficulty" id="Hard" value="30" onChange = {props.difficultyOnChange}>
              </input>
              <label htmlFor="Hard">Hard</label>
          </div> */}

            <input type="submit" value="Start" id="submit" disabled = {!isButtonEnabled} onClick = {props.buttonOnClick}>
            </input>
        </div>
      </div>
    )
  }
  export default ChooseDifficulty;