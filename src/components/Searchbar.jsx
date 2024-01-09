import React from "react";
import {FaSearch} from "react-icons/fa"
import "./Searchbar.css";
export const Searchbar= ()=>{
    return <div className="input-wrapper">
         <FaSearch id = "search-icon"/>
         <input placeholder="Search Audiobook"/>
    </div>;
   
}