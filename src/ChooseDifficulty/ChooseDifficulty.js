import React from 'react';
import './ChooseDifficulty.css';

const difficulties = [
  {
    title: "Easy",
    value: 12
  },
  {
    title: "Medium",
    value: 20
  },
  {
    title: "Hard",
    value: 30
  }
]

const ChooseDifficulty = (props) => {
    return (
      <div className = "modal" style = {{visibility: props.isDifficultyVisible ? "visible" : "hidden",}}>
        <div className = "modalContent">
          <p>Please, choose a level:</p>
          {
            difficulties.map((diffic, index) => (
              <div className = "radioContainer">
              <input type = "radio" name = "difficulty" id = {index} value = {diffic.value} onChange = {props.difficultyOnChange}> {diffic.title}
              </input>
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
          
            <input type="submit" value="Start" id="submit" disabled = {!props.isButtonEnabled} onClick = {props.buttonOnClick}>
            </input>
        </div>
      </div>
    )
  }
  export default ChooseDifficulty;