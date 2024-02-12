import React, { useEffect, useState } from "react";
import EventBox from "./EventBox";
import '../CSS-components/Popup.css';
import  AttendEvent  from "./AttendEvent";

export default function Popup(props){
    console.log(props);
    const [IsAttend , setIsAttend] = useState(false);

    function closePopup(){
        props.setTriggered(false);
        setIsAttend(false);
    }

    function Attend(){
        setIsAttend(true);
    }

    return( <div>
        <div className="popupDiv"></div>
        <div className="popupBody">
        {/* <EventBox key={index} id={index} festName={item.festName} place={item.place} time={item.time} discription={item.discription} onTap={showBox}/> */}
        <div className="popupContent">
            <div className="bck-btn" onClick={closePopup}>X</div>
            <h2>Event Infomration : </h2>
            <div className="contentContainer">
                <div className="ContentName">
                    <ul>
                        <li>Event name </li>
                        <li>Place </li>
                        <li>Time </li>
                        <li>Date </li>
                        <li>Duration </li>
                        <li>Age group </li>
                        <li>Category </li>
                        <li>Dress code </li>
                        <li>Contact no </li>
                    </ul>
                </div>
                <div className="ContentInfo">
                    <ul>
                        <li>{props.fName}</li>
                        <li>{props.place}</li>
                        <li>{props.time}</li>
                        <li>{props.date}</li>
                        <li>{props.duration}</li>
                        <li>{props.ageGroup}</li>
                        <li>{props.category}</li>
                        <li>{props.dressCode}</li>
                        <li>{props.contactNo}</li>
                    </ul>
                </div>
            </div>
            <div className="discription">
                <p className="eventDisc">Discription : </p>
                <p className="ContentInfo">{props.discription}</p>
            </div>
            <div className="AttendBtn" onClick={Attend}>Attend Event</div>
        </div>
    {/* {IsAttend && <AttendEvent/>} */}
    </div>
    {console.log(IsAttend)}
    </div>
    )
}