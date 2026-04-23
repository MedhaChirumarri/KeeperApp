import React from "react";

function Header({ searchQuery, onSearch }) {
  return (
    <header>
      <h1>Keeper</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
