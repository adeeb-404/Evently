import React, { useState } from "react";
import EventsList from "./EventList";
import '../CSS-components/HomeBody.css';
import Popup from "./Popup";
import AddEvent from "./AddEvent";
import Details from "./EventDetail";
export default function HomeBody(){
    const [events, setEvents] = useState(Details); // array of events
    return(
        <div className="HomeBody ">
            <div className="text-green-200 ">hi</div>
            <div className="EventListDiv">
                    <EventsList events={events}/>
            </div>
        </div>
    );
}