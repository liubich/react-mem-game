import React, { useState, useEffect } from 'react';
import './App.css';

const ChooseDifficulty = (props) => {
  return (
    <div className = "modal" style = {{visibility: props.isDifficultyVisible ? "visible" : "hidden",}}>
      <div className = "modalContent">
        <p>Please, choose a level:</p>
        <div className = "radioContainer">
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
        </div>
          <input type="submit" value="Start" id="submit" disabled = {!props.isButtonEnabled} onClick = {props.buttonOnClick}>
          </input>
      </div>
    </div>
  )
}

const Card = (props) => {
  return (
    <div
      id = {props.cardProperties.id}
      className = {`cards${props.numberOfCards} card` + (props.cardProperties.opened?" flip":" scale")}
      onClick = {() => props.onClick(props.cardProperties.id)}
      style = {{
        order: props.cardProperties.positionOnField,
        visibility: props.cardProperties.hidden ? "hidden" : "visible",
      }}
    >
      <img src=  "img/js-badge.svg" alt = {props.cardProperties.id} className = "backImg"/>
      <img src={`img/${props.cardProperties.hiddenValue}.svg`} alt = {props.cardProperties.id} className = "frontImg"/>
    </div>
  );
}

const Timer = (props) => {
  const [timerValue, setTimerValue] = useState("00:00");

  useEffect(() => {
    if(!props.timerStop) {
      setTimeout(() => {
        const secondsForTimer = Math.round(((new Date()) - props.timeOfStart)/1000);
        let minutes = Math.floor(secondsForTimer / 60);
        if (minutes < 10) minutes = `0${minutes}`;
        let seconds = secondsForTimer % 60;
        if (seconds < 10) seconds = `0${seconds}`;
        setTimerValue(`${minutes}:${seconds}`);
      }, 1000);
    }
  });
  
  return (
    <div id="timer">{timerValue}</div>
  )
}



const CardsContainer12 = (props) => {
  const cardsPropertiesStart = Array(12).fill(0).map((_, index) => ({
    id:index,
    hiddenValue:Math.floor(index/2),
    hidden:false,
    opened:false,
    positionOnField:Math.floor(Math.random()*50)
  }));

  let cardsPropertiesNew = [];

  const [cardsProperties, setCardsProperties] = useState(cardsPropertiesStart);

  const [fieldIsLocked, setFieldIsLocked] = useState(false);

  const [timerStopped, setTimerStopped] = useState(false);

  const getVisibleCardsNum = () => cardsPropertiesNew.filter(card => !(card.hidden)).length;

  const hideCards = () => {
    setTimeout(() => {
      const cardsForHide = getOpenedCards();
      cardsForHide.forEach(card => card.hidden = true);
      cardsForHide.forEach(card => card.opened = false);
      setCardsProperties(cardsPropertiesNew);
      if (!getVisibleCardsNum()) setTimerStopped(true);
      setFieldIsLocked(false);
    }, 1000);
  }

  const isCardOpened = (id) => cardsPropertiesNew[id].opened;

  const cardOnClick = (id) => {
    if (fieldIsLocked) return; 
    cardsPropertiesNew = [...cardsProperties];
    switch (getOpenedCards().length) {
      case 0:
        cardsPropertiesNew[id].opened = true;
        setCardsProperties(cardsPropertiesNew);
        return;
      case 1:
        if (isCardOpened(id)) return; 
        cardsPropertiesNew[id].opened = true;
        setCardsProperties(cardsPropertiesNew);
        setFieldIsLocked(true);
        if(areOpenedCardsEqual()) {
          hideCards();
          return;
        };
        setTimeout(() => {
          getOpenedCards().forEach(card => card.opened = false);
          setCardsProperties(cardsPropertiesNew);
          setFieldIsLocked(false);
        }, 600);
        return;
      default:
        return;
    }
  }

  const getOpenedCards = () => (cardsPropertiesNew.filter(card => card.opened));

  const areOpenedCardsEqual = () => {
    const openedCards = getOpenedCards();
    return openedCards[0].hiddenValue === openedCards[1].hiddenValue;
  };

  return (
    <main id = "cardsContainer">
      <div id = "innerContainer">
      <Timer 
        timeOfStart = {props.timeOfStart}
        timerStop = {timerStopped}
      />
        {cardsProperties.map((cardProperties, index) =>(
          <Card
            key = {index}
            cardProperties = {cardProperties}
            onClick = {(id) => cardOnClick(id)}
            numberOfCards = {12}
          />
        ))}
      </div>
    </main>
  );
}

 const CardsContainer20 = (props) => {
  const cardsPropertiesStart = Array(20).fill(0).map((_, index) => ({
    id:index,
    hiddenValue:Math.floor(index/2),
    hidden:false,
    opened:false,
    positionOnField:Math.floor(Math.random()*50)
  }));

  let cardsPropertiesNew = [];

  const [cardsProperties, setCardsProperties] = useState(cardsPropertiesStart);

  const [fieldIsLocked, setFieldIsLocked] = useState(false);

  const hideCards = () => {
    setTimeout(() => {
      const cardsForHide = getOpenedCards();
      cardsForHide.forEach(card => card.hidden = true);
      cardsForHide.forEach(card => card.opened = false);
      setCardsProperties(cardsPropertiesNew);
      setFieldIsLocked(false);
    }, 1000);
  }

  const isCardOpened = (id) => cardsPropertiesNew[id].opened;

  const cardOnClick = (id) => {
    if (fieldIsLocked) return; 
    cardsPropertiesNew = [...cardsProperties];
    switch (getOpenedCards().length) {
      case 0:
        cardsPropertiesNew[id].opened = true;
        setCardsProperties(cardsPropertiesNew);
        return;
      case 1:
        if (isCardOpened(id)) return; 
        cardsPropertiesNew[id].opened = true;
        setCardsProperties(cardsPropertiesNew);
        setFieldIsLocked(true);
        if(areOpenedCardsEqual()) {
          hideCards();
          return;
        };
        setTimeout(() => {
          getOpenedCards().forEach(card => card.opened = false);
          setCardsProperties(cardsPropertiesNew);
          setFieldIsLocked(false);
        }, 600);
        return;
      default:
        return;
    }
  }

  const getOpenedCards = () => (cardsPropertiesNew.filter(card => card.opened));

  const areOpenedCardsEqual = () => {
    const openedCards = getOpenedCards();
    return openedCards[0].hiddenValue === openedCards[1].hiddenValue;
  };

  return (
    <main id = "cardsContainer">
      <div id = "innerContainer">
      <Timer timeOfStart = {props.timeOfStart}/>
        {cardsProperties.map((cardProperties, index) =>(
          <Card
            key = {index}
            cardProperties = {cardProperties}
            onClick = {(id) => cardOnClick(id)}
            numberOfCards = {20}
          />
        ))}
       </div>
     </main>
   )
 }

 const CardsContainer30 = (props) => {
  const cardsPropertiesStart = Array(30).fill(0).map((_, index) => ({
    id:index,
    hiddenValue:Math.floor(index/2),
    hidden:false,
    opened:false,
    positionOnField:Math.floor(Math.random()*50)
  }));

  let cardsPropertiesNew = [];

  const [cardsProperties, setCardsProperties] = useState(cardsPropertiesStart);

  const [fieldIsLocked, setFieldIsLocked] = useState(false);

  const hideCards = () => {
    setTimeout(() => {
      const cardsForHide = getOpenedCards();
      cardsForHide.forEach(card => card.hidden = true);
      cardsForHide.forEach(card => card.opened = false);
      setCardsProperties(cardsPropertiesNew);
      setFieldIsLocked(false);
    }, 1000);
  }

  const isCardOpened = (id) => cardsPropertiesNew[id].opened;

  const cardOnClick = (id) => {
    if (fieldIsLocked) return; 
    cardsPropertiesNew = [...cardsProperties];
    switch (getOpenedCards().length) {
      case 0:
        cardsPropertiesNew[id].opened = true;
        setCardsProperties(cardsPropertiesNew);
        return;
      case 1:
        if (isCardOpened(id)) return; 
        cardsPropertiesNew[id].opened = true;
        setCardsProperties(cardsPropertiesNew);
        setFieldIsLocked(true);
        if(areOpenedCardsEqual()) {
          hideCards();
          return;
        };
        setTimeout(() => {
          getOpenedCards().forEach(card => card.opened = false);
          setCardsProperties(cardsPropertiesNew);
          setFieldIsLocked(false);
        }, 600);
        return;
      default:
        return;
    }
  }

  const getOpenedCards = () => (cardsPropertiesNew.filter(card => card.opened));

  const areOpenedCardsEqual = () => {
    const openedCards = getOpenedCards();
    return openedCards[0].hiddenValue === openedCards[1].hiddenValue;
  };

  return (
    <main id = "cardsContainer">
      <div id = "innerContainer">
      <Timer timeOfStart = {props.timeOfStart}/>
        {cardsProperties.map((cardProperties, index) =>(
          <Card
            key = {index}
            cardProperties = {cardProperties}
            onClick = {(id) => cardOnClick(id)}
            numberOfCards = {30}
          />
        ))}
       </div>
     </main>
   )
 }

const App = () => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [isDifficultyVisible, setDifficultyVisible] = useState(true);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [timeOfStart, setTimeOfStart] = useState(new Date());

  return (
    <>
      {numberOfCards===12?
        (<CardsContainer12 timeOfStart = {timeOfStart}/>):
        numberOfCards===20?
          (<CardsContainer20 timeOfStart = {timeOfStart}/>):
            numberOfCards===30?
            (<CardsContainer30 timeOfStart = {timeOfStart}/>):
            <></>
      }
      <ChooseDifficulty 
        difficultyOnChange = {()=> setButtonEnabled(true)}
        isButtonEnabled = {isButtonEnabled}
        isDifficultyVisible = {isDifficultyVisible}
        buttonOnClick = {() => {
          setDifficultyVisible(false);
          setNumberOfCards(parseInt(document.querySelector('input[name="difficulty"]:checked').value, 10));
          setTimeOfStart(new Date());
        }}
      />
    </> 
  );
}

export default App;
