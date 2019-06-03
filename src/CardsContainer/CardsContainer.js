import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from '../Timer/Timer.js';
import Card from '../Card/Card.js';
import * as gameActions from '../redux/actions/gameActions';
import './CardsContainer.css';

const CardsContainer = (props) => {

  return (
    <main id="cardsContainer">
      <div id="innerContainer">
        <Timer />
        {props.cardsProperties.map((cardProperties, index) => (
          <Card
            key={index}
            cardProperties={cardProperties}
            onClick={(id) => props.dispatch(gameActions.onCardClick(id))}
            numberOfCards={props.numberOfCards}
          />
        ))}
      </div>
    </main>
  );
}
CardsContainer.propTypes = {
  numberOfCards: PropTypes.number.isRequired,
  cardsProperties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    hiddenValue: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
    opened: PropTypes.bool.isRequired,
    positionOnField: PropTypes.number.isRequired
  })),
  dispatch: PropTypes.func.isRequired,
  fieldIsLocked: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    numberOfCards: state.numberOfCards,
    cardsProperties: state.cardsProperties,
    fieldIsLocked: state.fieldIsLocked,
  };
}
export default connect(mapStateToProps)(CardsContainer);