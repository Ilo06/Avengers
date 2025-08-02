import { useState, useEffect } from "react";
import AvengerCard from "./AvengerCard";

export default function CardsHolder() {
  const [data, setData] = useState([]); // initialize as empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/characters`);
        const characters = await res.json(); // directly the array
        setData(characters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((character) => (
          <AvengerCard
            id={character.id}
            name={character.name}
            realName={character.realName}
            universe={character.universe}
          />
        ))}
      </div>
    </div>
  );
}
