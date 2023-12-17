import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Header = ({ setSearch, pagination }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearch(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <div className="title">Search Anime Character</div>
      <div className="search-box">
        <FaSearch
          size={30}
          style={{ color: "rgba(0, 0, 0, 0.750)", margin: "10px" }}
        />
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search your Anime.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          className="btn-primary px-4 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="anime-count">
        Total {pagination.items ? pagination.items.total : 0} matching anime
        Characters found
      </div>
    </div>
  );
};
