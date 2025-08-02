export default function AvengerCard ({id, name, realName, universe}){
    return (
        <>
        <div>
            <p>{id}</p>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>Real Name: {realName}</p>
            <p>Universe: {universe} </p>
        </div>
        <span>
            <button type="button" className="border-2 text-black ">Update</button>
            <button type="button" className="bg-secondary-red text-primary-white border-2">Remove</button>
        </span>
        
        </>
    )
}