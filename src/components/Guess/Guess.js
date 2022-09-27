import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const cellClass = status ? `cell ${status}` : "cell";

  return <span className={cellClass}>{letter}</span>;
}
function Guess({ value, answer }) {
  const results = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num, idx) => (
        <Cell
          key={idx}
          letter={value ? value[num] : undefined}
          status={results ? results[idx]?.status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
