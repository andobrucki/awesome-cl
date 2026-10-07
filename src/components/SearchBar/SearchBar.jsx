import React, { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";
import { sidebarLinks as data } from "/public/data/links.js";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    const searchInputLower = e.target.value.toLowerCase();
    const results = [];
    for (let [category, items] of Object.entries(data)) {
      for (let item of items) {
        if (item.title?.toLowerCase().includes(searchInputLower)) {
          results.push({
            title: item.title,
            path: item.path,
            category: category,
          });
        }
        if (item.subcategories) {
          for (let subcat of item.subcategories) {
            if (subcat.title?.toLowerCase().includes(searchInputLower)) {
              results.push({
                title: subcat.title,
                path: subcat.path,
                category: category,
              });
            }
          }
        }
      }
    }

    setFilteredData(results);
    console.log("Filtered Results:", results);
  };

  // after clicking on a Link in the search results, clear input (and results)
  const clearSearchBar = () => {
    setSearchInput("");
  };

  return (
    <>
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          className="search-input"
          type="search"
          placeholder="Search components"
          onChange={handleChange}
          value={searchInput}
        />
        {searchInput.length > 0 && (
          <div className="search-results">
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <li key={index}>
                  <Link to={data.path} key={index} onClick={clearSearchBar}>
                    {data.title}
                    <span>
                      {data.category[0].toUpperCase() + data.category.slice(1)}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
