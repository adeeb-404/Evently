import React from 'react'
import { useState } from 'react'
import '../CSS-components/AddEvent.css';

const AddEvent = ({setEvents}) => {
    const[event,setEvent]=useState({
        festName:undefined,
        place:undefined,
        time:undefined,
        date:undefined,
        duration:undefined,
        dressCode:undefined,
        ageGroup:undefined,
        category:undefined,
        contactNo : undefined,
        discription:undefined,
    })
    const handlePost=(e)=>{
        setEvent(prev=>({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(event)
        setEvents(prev=>[event,...prev])
    }
  return (<div className='AddEvent'>
   <form action="" onSubmit={submitHandler} className=''>
    <input type="text"name='festName' onChange={handlePost} />
    <input type="text"name='place'  onChange={handlePost}/>
    <input type="text"name='time' onChange={handlePost} />
    <input type="date" name='date'  onChange={handlePost}/>
    <input type="text" name='duration'  onChange={handlePost}/>
    <input type="text" name='dressCode'  onChange={handlePost}/>
    <input type="text" name='ageGroup'  onChange={handlePost}/>
    <input type="text" name='category'  onChange={handlePost}/>
    <input type="number" name='contactNo'  onChange={handlePost}/>
    <input type="text" name='discription'  onChange={handlePost}/>
    <button type='submit'>submit</button>
   </form>
   </div>
  )
}

export default AddEvent