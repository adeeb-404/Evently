import React,{ useState } from 'react'
// import viteLogo from '/vite.svg'
import '../CSS-components/App.css';
import HomeNav from './homeNav.jsx'
import HomeBody from './HomeBody.jsx'
import OrganizerBody from './OrgnaizerBody.jsx'
import OrgnaizeInfo from './EventInform.jsx'
import { ProfilePage } from './ProfilePage.jsx';

function App() {
  const [searchValue , setSearchValue] = useState("");
  function handleSearch(value){
    setSearchValue(value);
  }

  console.log(searchValue);
  return (
    <>
      <HomeNav handleSearch={handleSearch}/>
      <HomeBody searchValue = {searchValue}/>
      {/* <ProfilePage/>  */}
      {/* <OrganizerBody/> */}
    </>
  )
}

export default App;
