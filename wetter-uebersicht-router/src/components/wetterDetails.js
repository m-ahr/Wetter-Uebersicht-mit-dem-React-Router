import React, { useState } from "react";
import {useParams } from "react-router-dom";

const APIKEY = "0cdf665b6bbf3a52b125e3a2a333fce5";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function WetterDetails() {

    const {id} = useParams();

    const [city, setCity] = useState("");
    const [result, setResult] = useState(null);

    const getWeather = async(e) => {
        e.preventDefault();
        if(city){

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
            );

            const container = await res.json();
            setResult(container);
        }
    }
    return (
        <div>
            <h1>Wetterdetails</h1>
            <p>Hol dir dein Wetter in deiner Stadt</p>
            <form onSubmit={getWeather}>
                <label>Stadt</label>
                <input value={city} onChange={(e) => setCity(e.target.value)}/>
                <button type="submit">Wetter holen</button>
            </form>
            <p>Temperatur: {result.main.temp}</p>
            <p>Max Temeratur:{ result.main.temp_max}</p>
            {id}
        </div>
    );
        
}