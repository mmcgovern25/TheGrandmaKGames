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
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-lg bg-[#aca788] text-[#3f3b00] text-[70px] sm:text-[70px] md:text-[90px] lg:text-[100px] flex items-center justify-center cursor-pointer p-4"
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
