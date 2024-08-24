import React from 'react';

// Import your images
import { blueo, redx } from '../assets'; // Adjust the path as needed
 // Adjust the path as needed

const SYMBOL_IMAGES = {
  'X': redx,
  'O': blueo
};

export default function c4Gameboard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col justify-center gap-5">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex justify-center gap-5">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] bg-[#aca788]
                  text-[#3f3b00] flex items-center justify-center cursor-pointer p-4 rounded-full"
                >
                  {playerSymbol ? (
                    <img
                      src={SYMBOL_IMAGES[playerSymbol]} // Use the image corresponding to the symbol
                      alt={playerSymbol}
                      className="w-full h-full object-contain"
                    />
                  ) : null}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
