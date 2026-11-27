
import englishWords from "an-array-of-english-words";

// Keep only five-letter words and convert them to uppercase.
export const WORDS = englishWords
  .filter((word) => /^[a-zA-Z]{5}$/.test(word))
  .map((word) => word.toUpperCase());

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
