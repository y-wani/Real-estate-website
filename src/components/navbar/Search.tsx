'use client';
import "../../styles/navbar.css";
import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
    return (
      <div className="search--box">
        <HiMagnifyingGlass size={30} className="search--icon" />
        <input
          placeholder="Search"
        />
      </div>
    );
  }

  export default Search;