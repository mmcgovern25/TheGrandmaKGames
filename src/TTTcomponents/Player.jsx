import React, { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (!isEditing) {
    onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={`${isActive ? 'border-[#4CAF50] animate-pulse' : 'border-transparent'} flex items-center w-1/2 border-3 rounded-md`}>
      <span className="flex items-center justify-between border-2 border-transparent lg:p-2 rounded-md font-bold">
        <span className="flex items-center text-[10px text-white uppercase mx-0 p-2 rounded-md text-center flex-grow">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
              style={{ display: 'block', visibility: 'visible', color: '#4CAF50', backgroundColor: 'white' }}
              className="font-inherit text-[10px] w-20 border-none p-2 bg-white text-center uppercase"
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
        </span>
        <span className="flex items-center ml-4">
          <img src={symbol} alt="Player Symbol" className="w-8 h-8 object-contain" />
        </span>
        <button onClick={handleEditClick} className="w-12 text-white text-sm bg-transparent p-2 cursor-pointer hover:text-[#D3D3D3] transition-colors duration-200">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </span>
    </li>
  );
}
