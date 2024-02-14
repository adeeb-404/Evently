import React from "react";
import { useState } from "react";
import "../CSS-components/AddEvent.css";

const AddEvent = ({ setEvents, toggleAdd }) => {
  const [event, setEvent] = useState({
    festName: undefined,
    place: undefined,
    time: undefined,
    date: undefined,
    duration: undefined,
    dressCode: undefined,
    ageGroup: undefined,
    category: undefined,
    contactNo: undefined,
    discription: undefined,
  });
  const handlePost = (e) => {
    setEvent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(event);
    setEvents((prev) => [event, ...prev]);
    toggleAdd();
  };
  return (
    <div className="AddEvent flex-col justify-center p-0">
      <h1 className=" text-slate-200 text-xl m-3">Add Event Details:</h1>
      <form action="" onSubmit={submitHandler} className="flex justify-center">
        <div className="p-3">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="festName"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="place"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="time"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="date"
            name="date"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="duration"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="dressCode"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="ageGroup"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="category"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="number"
            name="contactNo"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label>Name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl"
            type="text"
            name="discription"
            onChange={handlePost}
          />
        </div>
        <div className=" flex items-center justify-center">
          <button
            type="submit"
            className=" bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 m-2 h-9 w-11 hover:text-xl hover:p-2 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          >
            submit
          </button>
          <button
            type="reset"
            className=" bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 m-2 h-9 w-11 hover:text-xl hover:p-2 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          >
            Reset
          </button>
        </div>
        <button
          className="bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 m-2 h-9 w-11 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          onClick={toggleAdd}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
