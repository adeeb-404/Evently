import React, { useEffect, useState } from "react";
import EventsList from "./EventList";
import '../CSS-components/HomeBody.css';
import Popup from "./Popup";
import AddEvent from "./AddEvent";
import Details from "./EventDetail";

export default function HomeBody(props){
    const [events,setEvents]=useState(Details);
    //search bar implemetation trail 
    useEffect(()=>{
        const temp=Details.filter((item)=> {
            return item.festName.toLowerCase().startsWith(props.searchValue.toLowerCase());
        });
        // setEventValues(temp);
        setEvents(temp);
    },[props.searchValue])
    
    return(
        <div className="HomeBody ">
            <div className="text-green-200 "><AddEvent setEvents={setEvents}/></div>
            <div className="EventListDiv">
                    <EventsList events={events}/>
            </div>
        </div>
    );
}