import React from 'react';
import { FaSearchLocation } from "react-icons/fa";

export default function SearchBar () {
  return (
    <div>
        <FaSearchLocation className="reactIcon" id="searchIcon"/>
        <input type="text" className="searchBar" id="searchBar" placeholder="Search events" />
    </div>
  )
}
