import React from "react"
import "./menu.css"
export const Menu = ()=>{
    return <>
    <div className="menu">
        <div className="logo"><h1>Dugsiiye</h1></div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">location</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
    </div>
    </>
}