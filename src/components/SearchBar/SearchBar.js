import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import SearchItems from "../SearchItems/SearchItems";
import searchIcon from "../../images/search-icon.png";
import "./SearchBar.css";

function SearchBar(props) {
  const { countries, value, defaultValue, onChange, maxResults } = props;
  const [fuzzyMatches, setFuzzyMatches] = useState([countries]);
  const [countrySelected, setCountrySelected] = useState(false);

  useEffect(() => {
    if (countrySelected) {
      setFuzzyMatches([]);
      return;
    }
    const options = {
      isCaseSensitive: true,
      shouldSort: true,
      threshold: 0.25,
    };
    const fuse = new Fuse(countries, options);
    setFuzzyMatches(
      fuse
        .search(value)
        .splice(0, maxResults)
        .map((match) => match.item)
    );
  }, [value, countrySelected]);

  const handleCountrySelection = () => {
    setCountrySelected(true);
  };

  const handleNewSearch = (e) => {
    onChange(e.target.value);
    setCountrySelected(false);
  };

  const handleEnterCountry = () => {
    if (countrySelected) {
      alert("Country entered successfully");
    } else {
      alert("Ensure that a country is selected");
    }
  };

  return (
    <div className="search">
      <input
        className="search-box"
        value={value || defaultValue}
        onChange={handleNewSearch}
      />
      <span className="search-button" onClick={handleEnterCountry}>
        <img className="search-icon" src={searchIcon} />
      </span>
      <SearchItems
        fuzzyMatches={fuzzyMatches}
        handleCountrySelection={handleCountrySelection}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
