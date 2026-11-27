
import Tile from "./Tile";

function Row({ guess }) {
  const letters = guess?.guess ? guess.guess.split("") : [];

  return (
    <div className="row">
      {Array.from({ length: 5 }).map((_, index) => (
        <Tile
          key={index}
          letter={letters[index] || ""}
          status={guess?.result?.[index]}
        />
      ))}
    </div>
  );
}

export default Row;
