import React from "react";
import '../CSS-components/HomeNav.css';
import NavLogos from "./navLogos";
import SearchBar from "./SearchBar";
import Details from './EventDetail.jsx'


export default function HomeNav(props){
    function handleSearch(value){
        console.log(value);
        // console.log(isSearch);
        props.handleSearch(value);
    }
    return(
        <div className="navContainer">
            <div>
                <h1 className="text-green">Logo</h1>
                <h1>Evently</h1>
            </div>
            <SearchBar handleSearch={handleSearch} />
            <NavLogos/>
        </div>
    );
}