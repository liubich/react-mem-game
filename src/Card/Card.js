import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { inlineImagesObj } from '../images.js';

const Card = props => {
  return (
    <div
      id={props.cardProperties.id}
      className={
        `cards${props.numberOfCards} card` +
        (props.cardProperties.opened ? ' flip' : ' scale')
      }
      onClick={() => props.onClick(props.cardProperties.id)}
      style={{
        order: props.cardProperties.positionOnField,
        visibility: props.cardProperties.hidden ? 'hidden' : 'visible',
      }}
    >
      <img
        src={`data:image/svg+xml;base64,${inlineImagesObj.backImg}`}
        alt="card back"
        className="backImg"
      />
      <img
        src={`data:image/svg+xml;base64,${
          inlineImagesObj[props.cardProperties.hiddenValue]
        }`}
        alt="card front"
        className="frontImg"
      />
    </div>
  );
};

Card.propTypes = {
  cardProperties: PropTypes.shape({
    id: PropTypes.number.isRequired,
    hiddenValue: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
    opened: PropTypes.bool.isRequired,
    positionOnField: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  numberOfCards: PropTypes.number.isRequired,
};

export default Card;
