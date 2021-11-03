import React from "react";
import "./SearchItems.css";

function SearchItems(props) {
  const { fuzzyMatches, handleCountrySelection, onChange } = props;

  const handleItemSelection = (e) => {
    onChange(e.target.textContent);
    handleCountrySelection();
  };

  return (
    <>
      {fuzzyMatches &&
        fuzzyMatches.map((match, i) => (
          <div className="match-box" onClick={handleItemSelection}>
            <p className="match-items" key={i}>
              {match}
            </p>
          </div>
        ))}
    </>
  );
}

export default SearchItems;
