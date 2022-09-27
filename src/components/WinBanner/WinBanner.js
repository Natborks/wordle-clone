import React from "react";

function WinBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesse(s)</strong>.
      </p>
    </div>
  );
}

export default WinBanner;
