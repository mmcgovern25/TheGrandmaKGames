import { useState } from 'react';
import Player from '../TTTcomponents/Player';
import '../extraCSS/Tiktaktoe.css'
import { blueo, redx } from '../assets';
import GameBoard from '../TTTcomponents/Gameboard';
import Log from '../TTTcomponents/Log';
import { WINNING_COMBINATIONS } from '../TTTcomponents/winning-combinations';


function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O'
  }
  return currentPlayer
}

const initialGameBoard = [
  [null, null, null],  // Added a comma here
  [null, null, null],  // Added a comma here
  [null, null, null]
];


function TikTakToe() {
  const [gameTurns, setGameTurns] = useState([]);



  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = initialGameBoard;

  for (const turn  of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[]
    const secondSquareSymbol
    const thirdSquareSymbol
  }

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },...prevTurns]

      return updatedTurns
    });
  }


  return (
    <main>
      <div className='mt-20 flex flex-col justify-center items-center px-4'>
        <div className={`bruno-ace-sc-regular text-1xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-2 md:mb-4 `}>Tik Tak Toe</div>
      </div>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player className="player-name" initialName="Player 1" symbol={redx} isActive={activePlayer === 'X'} />
          <Player className="player-name" initialName="Player 2" symbol={blueo} isActive={activePlayer === 'O'} />
        </ol>
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
  </main>
  )
}

export default TikTakToe
