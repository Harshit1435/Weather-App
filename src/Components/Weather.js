import React,{useEffect, useState} from 'react'

export default function Weather() {


    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=cbb80bf07447532e73c8edfc3082d6fb`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setLocationData(data); // Store the API response in state
            })
            .catch((error) => {
                console.error('There was a problem fetching the weather data:', error);
            });
    }, []);
    console.log(locationData)

    // Render logic
    return (
        <div>
            {locationData ? (
                <div>
                    <h1>Weather in {locationData.name}</h1>
                    <p>Temperature: {locationData.main.temp}</p>
                    {/* Render other weather data as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};


