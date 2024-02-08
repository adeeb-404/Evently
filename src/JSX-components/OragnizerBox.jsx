import React from "react";
import '../CSS-components/App.css';

export default function OrganizeBox(props){
    return(<div className="OrganizerBox">
        
            <li>
                <p className="listName">{props.text}</p>
                <input type="text" className="OrgnizeBox" id={props.id} placeholder={props.placeholder}/>
            </li>
        
    </div>)
}