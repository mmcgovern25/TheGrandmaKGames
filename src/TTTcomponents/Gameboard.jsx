export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col justify-center gap-8">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex justify-center gap-8">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  className="w-64 h-64 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-lg bg-[#aca788] text-[#3f3b00] text-5xl flex items-center justify-center cursor-pointer p-4"
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
