import React from "react";
import '../CSS-components/HomeNav.css';
import NavLogos from "./navLogos";
import SearchBar from "./SearchBar";


export default function HomeNav(){
    return(
        <div className="navContainer">
            <div>
                <h1 className="text-green">Logo</h1>
                <h1>Evently</h1>
            </div>
            <SearchBar/>
            <NavLogos/>
        </div>
    );
}