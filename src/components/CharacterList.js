import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log("response.data", response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  console.log("characters", characters);

  return (
    <React.Fragment>
      <section className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default CharacterList;
