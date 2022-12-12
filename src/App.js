import React from "react"
import Navbar from "./components/Navbar"
import Journey from "./components/Journey"
import data from "./data"

export default function App() {
    const journey = data.map( item => {

        return (
            <Journey
                key={item.id}
                item={item}
            />
        )   
    })

    return (
        <div>
            <Navbar/>
            <section>
                {journey}
            </section>
        </div>
    )
}