import React, { useState, useEffect } from 'react';
import ChooseDifficulty from './ChooseDifficulty/ChooseDifficulty.js';
import CardsContainer from './CardsContainer/CardsContainer.js';
import './ReactMemGame.css';

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
];

const ReactMemGame = () => {
  const [isDifficultyVisible, setDifficultyVisible] = useState(true);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [timeOfStart, setTimeOfStart] = useState(new Date());
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [timerValue, setTimerValue] = useState('00:00');
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);

  // const changeDifficulty = (value) => {
  //   difficulties.forEach(diff => diff.checked = false);
  //   difficulties.filter(diff => diff.value === value).checked = true;
  // }

  useEffect(() => {
    if(timerIsActive) {
    const timerId = setTimeout(() => {
      const secondsForTimer = Math.round(((new Date()) - timeOfStart)/1000);
      let minutes = Math.floor(secondsForTimer / 60);
      if (minutes < 10) minutes = `0${minutes}`;
      let seconds = secondsForTimer % 60;
      if (seconds < 10) seconds = `0${seconds}`;
      setTimerValue(`${minutes}:${seconds}`);
    }, 1000);
  return () => clearTimeout(timerId);
  }});

  return (
    <>
      {numberOfCards?(<CardsContainer timerValue = {timerValue} setTimerIsActive = {setTimerIsActive} numberOfCards = {numberOfCards}/>):(null)}
      }
      <ChooseDifficulty
        difficulties = {difficulties}
        selectedDifficulty = {selectedDifficulty}
        changeDifficulty = {setSelectedDifficulty}
        isDifficultyVisible = {isDifficultyVisible}
        buttonOnClick = {() => {
          setDifficultyVisible(false);
          setNumberOfCards(selectedDifficulty);
          setTimeOfStart(new Date());
          setTimerIsActive(true);
        }}
      />
    </> 
  );
}

export default ReactMemGame;
