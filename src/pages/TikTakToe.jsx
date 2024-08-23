import React from 'react';
import Player from '../TTTcomponents/Player';
import GameBoard from '../TTTcomponents/Gameboard';
import Log from '../TTTcomponents/Log';
import GameOver from '../TTTcomponents/GameOver.jsx';
import { WINNING_COMBINATIONS } from '../TTTcomponents/winning-combinations';
import { useState } from 'react';
import { blueo, redx } from '../assets';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function TikTakToe() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  });

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main className="flex flex-col justify-center items-center px-4">
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-8 lg:mb-4 bruno-ace-sc-regular">Tik Tak Toe</div>

      <div
        className="pb-12 max-w-[550px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[600px] w-full bg-gradient-to-b from-green-500 to-green-700 lg:pt-[15px] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl flex flex-col items-center"
      >
        <ol id="players" className="highlight-player flex justify-center items-center gap-4 mb-6">
          <Player
            className="player-name"
            initialName="Player 1"
            symbol={redx}
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            className="player-name"
            initialName="Player 2"
            symbol={blueo}
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default TikTakToe;
