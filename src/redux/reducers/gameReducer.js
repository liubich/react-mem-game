export default function gameReducer(state, action) {
  let cardsProperties = [];
  switch (action.type) {
    case "DIFFICULTY_SUBMIT":
      return {
        ...state,
        isDifficultyVisible: false,
        numberOfCards: action.selectedDifficulty,
        timeOfStart: new Date(),
        timerIsActive: true,
        cardsProperties: Array(action.selectedDifficulty)
          .fill(0)
          .map((_, index) => ({
            id: index,
            hiddenValue: Math.floor(index / 2),
            hidden: false,
            opened: false,
            positionOnField: Math.floor(Math.random() * 50),
          })),
      };
    case "DIFFICULTY_PICK":
      return {
        ...state,
        isButtonEnabled: true,
        selectedDifficulty: action.selectedDifficulty,
      };
    case "HIDE_CARD":
      cardsProperties = state.cardsProperties.map(value =>
        Object.assign({}, value),
      );
      cardsProperties[action.id].hidden = true;
      cardsProperties[action.id].opened = false;
      return {
        ...state,
        cardsProperties,
      };
    case "UNLOCK_FIELD":
      return { ...state, fieldIsLocked: false };
    case "LOCK_FIELD":
      return { ...state, fieldIsLocked: true };
    case "START_TIMER":
      return { ...state, timerIsActive: true };
    case "END_GAME":
      return { ...state, timerIsActive: false, showRestartButton: true };
    case "CLOSE_CARD":
      cardsProperties = state.cardsProperties.map(value =>
        Object.assign({}, value),
      );
      cardsProperties[action.id].opened = false;
      return {
        ...state,
        cardsProperties,
      };
    case "OPEN_CARD":
      cardsProperties = state.cardsProperties.map(value =>
        Object.assign({}, value),
      );
      cardsProperties[action.id].opened = true;
      return {
        ...state,
        cardsProperties,
      };
    case "SET_SECONDS":
      return { ...state, secondsForTimer: action.seconds };
    case "RESTART_GAME":
      return {
        ...state,
        timerIsActive: false,
        secondsForTimer: 0,
        isButtonEnabled: false,
        isDifficultyVisible: true,
        selectedDifficulty: undefined,
        numberOfCards: undefined,
        showRestartButton: false,
      };
    default:
      return state;
  }
}
