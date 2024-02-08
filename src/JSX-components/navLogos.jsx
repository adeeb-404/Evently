import React from 'react'

import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavLogos = () => {
  return (
    <>
    <div>
        <FaBell className="reactIcon" id="settingsIcon"/>
        <a href="https://www.youtube.com/"> <IoMdSettings className="reactIcon"/></a>
        <h2>Welcome @user</h2>
        <CgProfile className="reactIcon" id="profileIcon"/>
    </div>
</>
  )
}

export default NavLogos;