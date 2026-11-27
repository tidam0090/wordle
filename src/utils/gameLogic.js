
import englishWords from "an-array-of-english-words";

const VALID_GUESSES = new Set(
  englishWords
    .filter((word) => /^[a-zA-Z]{5}$/.test(word))
    .map((word) => word.toUpperCase())
);

export function isValidWord(word) {
  return VALID_GUESSES.has(word.toUpperCase());
}

export function checkGuess(guess, answer) {
  const result = Array(5).fill("absent");
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");

  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i] = "correct";
      answerLetters[i] = null;
      guessLetters[i] = null;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] !== null) {
      const index = answerLetters.indexOf(guessLetters[i]);

      if (index !== -1) {
        result[i] = "present";
        answerLetters[index] = null;
      }
    }
  }

  return result;
}

export function getLetterStatuses(guesses) {
  const statuses = {};

  guesses.forEach(({ guess, result }) => {
    guess.split("").forEach((letter, index) => {
      const status = result[index];

      if (
        !statuses[letter] ||
        (statuses[letter] === "absent" && status !== "absent") ||
        (statuses[letter] === "present" && status === "correct")
      ) {
        statuses[letter] = status;
      }
    });
  });

  return statuses;
}
