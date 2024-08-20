import React from 'react';
import Player from '../TTTcomponents/Player';
import '../extraCSS/Tiktaktoe.css'
import { blueo, redx } from '../assets';

function TikTakToe() {
  return (
    <main>
      <div className='mt-20 flex flex-col justify-center items-center px-4'>
        <div className={`bruno-ace-sc-regular text-1xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-2 md:mb-4 `}>Tik Tak Toe</div>
      </div>

      <div id="game-container">
        <ol id="players">
          <Player className="player-name" initialName="Player 1" symbol={redx} />
          <Player className="player-name" initialName="Player 2" symbol={blueo} />
        </ol>
        GAME BOARD
      </div>
      LOG
  </main>
  )
}

export default TikTakToe
