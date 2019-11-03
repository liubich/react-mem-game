import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { backgroundImage } from "../resources/images";

const Card = ({ numberOfCards, cardProperties, onClick, frontImg }) => {
  return (
    <div
      id={cardProperties.id}
      className={
        `cards${numberOfCards} card` +
        (cardProperties.opened ? " flip" : " scale")
      }
      onClick={() => onClick(cardProperties.id)}
      style={{
        order: cardProperties.positionOnField,
        visibility: cardProperties.hidden ? "hidden" : "visible",
      }}
    >
      <img
        src={backgroundImage}
        alt={cardProperties.id}
        className="backImg"
      />
      <img
        src={frontImg}
        alt={cardProperties.id}
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
  frontImg: PropTypes.string.isRequired,
};
export default Card;
