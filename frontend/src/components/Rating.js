import React from "react";
import PropTypes from "prop-types";

const getStars = (value, color) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    let currentStar = (
      <span key={i} style={{ color }}>
        <i
          className={
            value <= 0
              ? "far fa-star"
              : value >= 1
              ? "fas fa-star"
              : "fas fa-star-half-alt"
          }
        ></i>
      </span>
    );
    stars.push(currentStar);
    value--;
  }
  return stars;
};

const Rating = ({ value, text, color }) => {
  return (
    <div>
      {getStars(+value, color).map((star) => star)}
      <span>{text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
