import React from "react"
import pin from "./pin.png"

export default function Journey(props){
    return (
        <div class="card">
            <img src={`${props.item.imageURL}`} alt="" class="locationImg"/>
            <div class="main-section">
                <div class="headerSection">
                    <img src={pin} alt="" class="mapIcon"></img>
                    <p class="location">{props.item.location}</p>
                    <a href={`${props.item.googleMapLink}`}>View on Goolge Maps</a> 
                </div>  
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p class="description">{props.item.description}</p>
            </div>
        </div>
    )
}


Travel-journal-solo-project
