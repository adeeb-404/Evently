import React,{ useState } from 'react'
// import viteLogo from '/vite.svg'
import '../CSS-components/App.css';
import HomeNav from './homeNav.jsx'
import HomeBody from './HomeBody.jsx'
import OrganizerBody from './OrgnaizerBody.jsx'
import OrgnaizeInfo from './EventInform.jsx'

function App() {
  return (
    <>
    {/* <h1>Hi hello world</h1> */}
      <HomeNav />
      <HomeBody />
      <p className='text-black'>HI</p>
      {/* <OrganizerBody/> */}
    </>
  )
}

export default App
