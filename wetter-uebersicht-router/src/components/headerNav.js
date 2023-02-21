import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
    return (
        <header>
            <hr/>
            <Link to="/home">Startseite</Link>
              |  
            <Link to="/wetterList">Liste</Link>
              |  
            <Link to="/wetterDetails">Details</Link>
        </header>
    )

}