import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from '../Timer/Timer.js';
import Card from '../Card/Card.js';
import './CardsContainer.css';

const CardsContainer = (props) => {
    const cardsPropertiesStart = Array(props.numberOfCards).fill(0).map((_, index) => ({
      id:index,
      hiddenValue:Math.floor(index/2),
      hidden:false,
      opened:false,
      positionOnField:Math.floor(Math.random()*50)
    }));
  
    let cardsPropertiesNew = [];
  
    const [cardsProperties, setCardsProperties] = useState(cardsPropertiesStart);
  
    const [fieldIsLocked, setFieldIsLocked] = useState(false);
  
    const getVisibleCardsNum = () => cardsPropertiesNew.filter(card => !(card.hidden)).length;
  
    const hideCards = () => {
      setTimeout(() => {
        getOpenedCards().forEach(card => {
          card.hidden = true;
          card.opened = false;
          });
        setCardsProperties(cardsPropertiesNew);
        if (!getVisibleCardsNum()) props.setTimerIsActive(false);
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
          }
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
          secondsForTimer = {props.secondsForTimer}
        />
          {cardsProperties.map((cardProperties, index) =>(
            <Card
              key = {index}
              cardProperties = {cardProperties}
              onClick = {(id) => cardOnClick(id)}
              numberOfCards = {props.numberOfCards}
            />
          ))}
        </div>
      </main>
    );
  }
  CardsContainer.propTypes = {
    numberOfCards: PropTypes.number.isRequired,
    secondsForTimer: PropTypes.number.isRequired,
    setTimerIsActive: PropTypes.func.isRequired
  }
  export default CardsContainer;