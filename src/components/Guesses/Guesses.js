import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses = [], answer }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, idx) => (
          <Guess key={idx} value={guesses[num]} answer={answer} />
        ))}
      </div>
    </>
  );
}

export default Guesses;
