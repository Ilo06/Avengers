import AvengerCard from "./AvengerCard";

export default function CardsHolder({ characters, onDelete, onEdit }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {characters.map((char) => (
        <AvengerCard
          key={char.id}
          id={char.id}
          name={char.name}
          realName={char.realName}
          universe={char.universe}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

