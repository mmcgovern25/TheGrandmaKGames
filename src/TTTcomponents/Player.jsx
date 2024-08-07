import React from 'react'
import { useState } from 'react'

const Player = ({name, symbol}) => {
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
            <span>
              {isEditing ? <input type='text' required value={name}/> : <input type='text' required value={name}/> }
              <span className='player-symbol'>{symbol}</span>
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
          </li>
  )
}

export default Player
