import React from "react"
import globe from "./globe.png"

export default function Navbar(){
    return (
        <nav>
            <img src={globe} alt="" id="logo"/> 
            <h3>My Travel Journal</h3>
        </nav>
    )
}

