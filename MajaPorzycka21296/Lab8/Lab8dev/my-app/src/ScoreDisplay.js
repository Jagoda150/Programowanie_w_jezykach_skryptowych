import React from 'react';

function ScoreDisplay({ score }) {
  let message;
  if (score < 50) {
    message = <p>Za mało punktów lamusie</p>;
  } else if (score < 80) {
    message = <p>W sam raz </p>;
  } else {
    message = <p>Super wynik jesteś hardcorem!</p>;
  }

  return <div>{message}</div>;
}

export default ScoreDisplay;
