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
  const [secondsForTimer, setSecondsForTimer] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);

  const onDifficultySubmit = () => {
    setDifficultyVisible(false);
    setNumberOfCards(selectedDifficulty);
    setTimeOfStart(new Date());
    setTimerIsActive(true);
  };

  useEffect(() => {
    if(timerIsActive) {
    const timerId = setTimeout(() => {
      setSecondsForTimer(Math.round(((new Date()) - timeOfStart)/1000));
    }, 1000);
  return () => clearTimeout(timerId);
  }});

  return (
    <>
      {numberOfCards?(<CardsContainer secondsForTimer = {secondsForTimer} setTimerIsActive = {setTimerIsActive} numberOfCards = {numberOfCards}/>):(null)}
      <ChooseDifficulty
        difficulties = {difficulties}
        selectedDifficulty = {selectedDifficulty}
        changeDifficulty = {setSelectedDifficulty}
        isDifficultyVisible = {isDifficultyVisible}
        onDifficultySubmit = {onDifficultySubmit}
      />
    </> 
  );
}

export default ReactMemGame;
