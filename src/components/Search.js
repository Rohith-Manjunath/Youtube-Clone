import React from "react";
import "../styles/Navbar.css";
import { FaClockRotateLeft } from "react-icons/fa6";

const Search = ({ data }) => {
  return (
    <div className="search-history-data">
      <FaClockRotateLeft className="clock-icon" />
      <p>{data}</p>
      <span className="Remove">Remove</span>
    </div>
  );
};

export default Search;
