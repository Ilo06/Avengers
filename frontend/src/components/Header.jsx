import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-primary-blue text-primary-white flex justify-between items-center px-6 py-4 rounded-b-2xl shadow-md">
      <h1 className="text-3xl font-extrabold tracking-wide">Avengers Character Manager</h1>
      
      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Add new character"
          className="text-primary-white hover:text-yellow-300 transition text-3xl"
        >
          <i className="bx bx-plus-circle"></i>
        </button>

        <div className="flex items-center bg-gray-800 rounded-2xl px-4 py-2 w-64 gap-3">
          <i className="bx bx-search text-primary-white text-xl"></i>
          <input
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search characters..."
            className="bg-transparent placeholder-primary-white text-primary-white focus:outline-none w-full text-lg"
            aria-label="Search characters"
          />
        </div>
      </div>
    </header>
  );
}
