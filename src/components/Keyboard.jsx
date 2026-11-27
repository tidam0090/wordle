
const keys = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  ["ENTER", ..."ZXCVBNM", "BACKSPACE"]
];

function Keyboard({ onKeyPress, letterStatuses }) {
  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => {
            const status = letterStatuses[key] || "";

            return (
              <button
                key={key}
                className={`key ${status} ${key.length > 1 ? "wide" : ""}`}
                onClick={() => onKeyPress(key)}
              >
                {key === "BACKSPACE" ? "⌫" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
