import React from "react";
import '../CSS-components/EventBox.css';

export default function EventBox(props){
    var id;
    function handleClick(){
        // console.log(props.id);
        props.onTap(props.id);
        props.setTriggered(true);
    }

    function closePopup(){
        props.setTriggered(false);
    }
    return (
            <div className="EventBox" onClick={handleClick}>
                <div className="BoxHeading"> 
                {/* {id = props.id} */}
                    <h1>{props.festName}</h1>
                    <div>
                        <h2>{props.place}</h2>
                        <h2> | </h2>
                        <h2>{props.time}</h2>
                    </div>
                </div>
                <div className="BoxContent"><p>{props.discription}</p></div>
            </div>
    );
}