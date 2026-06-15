import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEditClick() {
    setEditing((prevEditing) => !prevEditing);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
