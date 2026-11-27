
import Row from "./Row";

function Board({ pastGuesses, currentGuess }) {
  return (
    <div className="board">
      {Array.from({ length: 6 }).map((_, index) => {
        let guess = null;

        if (index < pastGuesses.length) {
          guess = pastGuesses[index];
        } else if (index === pastGuesses.length) {
          guess = { guess: currentGuess };
        }

        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
}

export default Board;
