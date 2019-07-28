export function onDifficultySubmit(selectedDifficulty) {
  return { type: "DIFFICULTY_SUBMIT", selectedDifficulty };
}

export function onDifficultyPick(pickedDifficulty) {
  return { type: "DIFFICULTY_PICK", selectedDifficulty: pickedDifficulty };
}

export function onCardClick(id) {
  return function(dispatch, getState) {
    if (getState().fieldIsLocked) return;
    const getOpenedCards = () =>
      getState().cardsProperties.filter(card => card.opened);
    const getVisibleCardsNum = () =>
      getState().cardsProperties.filter(card => !card.hidden).length;
    const areOpenedCardsEqual = () => {
      const openedCards = getOpenedCards();
      return openedCards[0].hiddenValue === openedCards[1].hiddenValue;
    };

    switch (getOpenedCards().length) {
      case 0:
        dispatch({ type: "OPEN_CARD", id });
        break;
      case 1:
        if (getState().cardsProperties[id].opened) return;
        dispatch({ type: "OPEN_CARD", id });
        dispatch({ type: "LOCK_FIELD" });
        if (areOpenedCardsEqual()) {
          setTimeout(() => {
            getOpenedCards().forEach(({ id }) =>
              dispatch({ type: "HIDE_CARD", id }),
            );
            if (!getVisibleCardsNum()) dispatch({ type: "STOP_TIMER" });
            dispatch({ type: "UNLOCK_FIELD" });
          }, 1000);
        } else {
          setTimeout(() => {
            getOpenedCards().forEach(({ id }) =>
              dispatch({ type: "CLOSE_CARD", id }),
            );
            dispatch({ type: "UNLOCK_FIELD" });
          }, 600);
        }
        break;
      default:
    }
  };
}

export function hideCard(id) {
  return { type: "HIDE_CARD", id };
}

export function setFieldIsLocked(isLocked) {
  if (isLocked) return { type: "LOCK_FIELD" };
  return { type: "UNLOCK_FIELD" };
}

export function setTimerIsActive(isActive) {
  if (isActive) return { type: "START_TIMER" };
  return { type: "STOP_TIMER" };
}

export function closeCard(id) {
  return { type: "CLOSE_CARD", id };
}

export function setSecondsForTimer(seconds) {
  return { type: "SET_SECONDS", seconds };
}

export function restartGame() {
  return { type: "RESTART_GAME" };
}
