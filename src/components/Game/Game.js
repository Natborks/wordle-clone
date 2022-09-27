import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import Guesses from "../Guesses/Guesses";
import WinBanner from "../WinBanner/WinBanner";
import LossBanner from "../LossBanner/LossBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [status, setStatus] = React.useState({
    running: true,
    win: false,
    loss: false,
  });

  function handleGuess(guess) {
    setGuesses([guess, ...guesses]);

    const nextGuessCount = numGuesses + 1;
    setNumGuesses(nextGuessCount);

    if (guess === answer) {
      setStatus({ ...status, win: true, running: false });

      return;
    }

    if (nextGuessCount >= NUM_OF_GUESSES_ALLOWED) {
      setStatus({ ...status, loss: true, running: false });
    }
  }

  return (
    <>
      {status.win && <WinBanner numGuesses={numGuesses} />}
      {status.loss && <LossBanner answer={answer} />}
      <Guesses guesses={guesses} answer={answer} />
      <GuessForm handleGuess={handleGuess} disabled={!status.running} />
    </>
  );
}

export default Game;
