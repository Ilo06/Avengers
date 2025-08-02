import { useState, useEffect } from "react";
import AvengerCard from "./AvengerCard";

export default function CardsHolder() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const res = await fetch(`http://localhost:8080/characters`);
      const characters = await res.json();
      setData(characters);
    } catch (error) {
      console.log("Erreur lors du chargement :", error);
    }
  };

  const handleDeleteCharacter = (deletedId) => {
    setData((prevData) => prevData.filter((char) => char.id !== deletedId));
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((character) => (
          <AvengerCard
            key={character.id}
            id={character.id}
            name={character.name}
            realName={character.realName}
            universe={character.universe}
            onDelete={handleDeleteCharacter}
          />
        ))}
      </div>
    </div>
  );
}
