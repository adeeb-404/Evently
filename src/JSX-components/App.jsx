import React, { useState } from "react";
import "../CSS-components/App.css";
import HomeNav from "./homeNav.jsx";
import HomeBody from "./HomeBody.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(value) {
    setSearchValue(value);
  }

  console.log(searchValue);
  return (
    <div className="h-full">
      <HomeNav handleSearch={handleSearch} />
      <HomeBody searchValue={searchValue} />
      {/* <ProfilePage /> */}
      {/* <OrganizerBody/> */}
    </div>
  );
}

export default App;
