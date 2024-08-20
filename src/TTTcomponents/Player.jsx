import React from 'react';
import { useState } from 'react';
import '../extraCSS/Tiktaktoe.css';

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined }>
      <span className="player">
        <span className='player-name'>
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
              style={{ display: 'block', visibility: 'visible', color: 'black', backgroundColor: 'white' }}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
        </span>
        <span className='player-symbol'>
          <img src={symbol} alt="Player Symbol" className="player-symbol-img" />
        </span>
        <button onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </span>
    </li>
  );
}
