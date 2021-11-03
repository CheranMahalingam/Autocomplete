import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import words from "../data/words.json";

function SearchPage() {
  const [search, setSearch] = useState("");

  const defaultValue = "";
  const maxResults = 15;

  const handleNewSearch = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div className="search-page">
      <SearchBar
        countries={words}
        value={search}
        defaultValue={defaultValue}
        onChange={handleNewSearch}
        maxResults={maxResults}
      />
    </div>
  );
}

export default SearchPage;
