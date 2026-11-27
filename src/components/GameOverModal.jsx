

function GameOverModal({ gameStatus, solutionWord, onRestart }) {
  if (gameStatus === "IN_PROGRESS") {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>
          {gameStatus === "WON" ? "Congratulations!" : "Game Over"}
        </h2>

        <p>
          {gameStatus === "WON"
            ? "You guessed the correct word."
            : `The correct word was ${solutionWord}.`}
        </p>

        <button onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
