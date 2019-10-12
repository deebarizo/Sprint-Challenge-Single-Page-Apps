import React from "react";

export default function CharacterCard(props) {
  const { character } = props;

  return (
    <React.Fragment key={character.id}>
      <h2>{character.name}</h2>
      <p>
        <strong>Status:</strong> {character.status}
      </p>
    </React.Fragment>
  );
}
