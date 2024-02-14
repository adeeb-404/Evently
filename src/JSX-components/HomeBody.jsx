import React, { useEffect, useState } from "react";
import EventsList from "./EventList";
import "../CSS-components/HomeBody.css";
import AddEvent from "./AddEvent";
import Details from "./EventDetail";

export default function HomeBody(props) {
  const [events, setEvents] = useState(Details);
  //search bar implemetation trail
  useEffect(() => {
    const temp = Details.filter((item) => {
      return item.festName
        .toLowerCase()
        .startsWith(props.searchValue.toLowerCase());
    });
    // setEventValues(temp);
    setEvents(temp);
  }, [props.searchValue]);

  const [add, setAdd] = useState(false);

  function toggleAdd() {
    setAdd(!add);
  }

  return (
    <div className="HomeBody bg-gradient-to-b from-slate-900 to-slate-950">
      <div className=" text-slate-200 flex items-center justify-center w-[20%]">
        {!add && (
          <button
            onClick={toggleAdd}
            className=" w-fit h-fit p-4 border-3  bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          >
            Add event
          </button>
        )}
        {add && <AddEvent setEvents={setEvents} toggleAdd={toggleAdd} />}
      </div>
      <div className="EventListDiv">
        <EventsList events={events} />
      </div>
    </div>
  );
}
