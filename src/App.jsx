
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOverModal from "./components/GameOverModal";
import useWordle from "./hooks/useWordle";
import "./App.css";

function App() {
  const {
    solutionWord,
    currentGuess,
    pastGuesses,
    gameStatus,
    message,
    letterStatuses,
    handleKeyPress,
    resetGame
  } = useWordle();

  return (
    <div className="app">
      <header className="header">
        <h1>WORDLE</h1>
        <p>Guess the five-letter word</p>
      </header>

      <main className="game">
        <div className="message">{message}</div>

        <Board
          pastGuesses={pastGuesses}
          currentGuess={currentGuess}
        />

        <Keyboard
          onKeyPress={handleKeyPress}
          letterStatuses={letterStatuses}
        />

        <GameOverModal
          gameStatus={gameStatus}
          solutionWord={solutionWord}
          onRestart={resetGame}
        />
      </main>

      <footer className="footer">
        <p>
          Developed by <strong>Rajat Pancha</strong> | SID: 115190
        </p>
        <p>© 2026 Rajat Pancha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
