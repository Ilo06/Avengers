export default function AvengerCard({ id, name, realName, universe }) {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <p className="text-sm text-gray-400">ID: {id}</p>
        <h2 className="text-3xl font-extrabold text-gray-900">{name}</h2>
        <p className="mt-1 text-gray-700">
          <span className="font-semibold">Real Name:</span> {realName}
        </p>
        <p className="mt-1 text-gray-700">
          <span className="font-semibold">Universe:</span> {universe}
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 transition"
        >
          Update
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
