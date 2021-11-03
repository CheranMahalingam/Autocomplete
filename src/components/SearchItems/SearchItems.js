import React from "react";
import PropTypes from "prop-types";
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

SearchItems.propTypes = {
  fuzzyMatches: PropTypes.arrayOf(PropTypes.string),
  handleCountrySelection: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchItems;
