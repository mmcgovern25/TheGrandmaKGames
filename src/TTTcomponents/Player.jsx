import React from 'react'
import { useState } from 'react'

const Player = ({name, symbol}) => {
  return (
    <li>
            <span>
              <span className='player-name'>{name}</span>
              <span className='player-symbol'>{symbol}</span>
              <button>Edit</button>
            </span>
          </li>
  )
}

export default Player
