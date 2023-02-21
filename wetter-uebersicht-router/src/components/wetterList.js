import React from "react";
import { Link } from "react-router-dom";

export default function WetterList() {
    return (
        <div>
        <h1>Wetter-Liste</h1>
            <ul>
                <Link to="/news-detail/1"><li>Viele Wolken in Köln</li></Link>
                <Link to="/news-detail/2"><li>Berliner knacken die 30 Grad Marke</li></Link>
                <Link to="/news-detail/3"><li>Herrliches Wetter in Hamburg</li></Link>
                <Link to="/news-detail/4"><li>Starker Regen in Muenchen</li></Link>
            </ul>
        </div>
    )

}