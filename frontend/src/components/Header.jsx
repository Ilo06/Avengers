import { useState } from "react";

export default function Header({isOpen, setIsOpen}) {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-[color:var(--color-primary-blue)] text-[color:var(--color-primary-white)] flex justify-between items-center px-6 py-4 rounded-b-2xl shadow-md">
      <h1 className="font-hero-title text-3xl tracking-wide">Avengers Character Manager</h1>

      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Add new character"
          className="text-[color:var(--color-primary-white)] hover:text-[color:var(--color-accent-yellow)] transition text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <i className="bx bx-plus-circle"></i>
        </button>

        <div className="flex items-center bg-[color:var(--color-secondary-gray)] rounded-2xl px-4 py-2 w-64 gap-3">
          <i className="bx bx-search text-[color:var(--color-text-dark)] text-xl"></i>
          <input
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search characters..."
            className="bg-transparent placeholder-[color:var(--color-text-dark)] text-[color:var(--color-text-dark)] focus:outline-none w-full text-lg font-body"
            aria-label="Search characters"
          />
        </div>
      </div>
    </header>
  );
}
