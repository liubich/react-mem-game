import React from 'react';
import './Timer.css';
const Timer = (props) => {
    return (
      <div id="timer">{props.timerValue}</div>
    )
  }
export default Timer;