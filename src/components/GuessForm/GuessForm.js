import React from "react";

function GuessForm({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) return;

    handleGuess(guess);

    setGuess("");
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={disabled}
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

const formatGuess = (guess) => guess.toUpperCase().slice(0, 5);

export default GuessForm;
