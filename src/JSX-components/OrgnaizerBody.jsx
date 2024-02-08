import React from "react";
import OrganizeForm from "./OrganizeForm";
import OrganizeBox from "./OragnizerBox";
import '../CSS-components/OrganizerBody.css'

export default function OrganizerBody(){
    return(
        <div className="organizerBody">
            <h1>Organize the event</h1>
            <h2>Fill the form</h2>
            <div>
                <ul>
                    {OrganizeForm.map((item, index)=>(
                        <OrganizeBox key={index} text={item.text} id={item.index} placeholder={item.placeholder}/>
                    ))}
                </ul>
            </div>
            <button className="submitForm" >Post</button>
        </div>
    )
}