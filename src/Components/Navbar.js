import React, {  } from 'react'
import { useState, useEffect} from 'react';

export default function Navbar() {
   
    const[locationData, setLocationData] = useState(null)
    const[location, setLocation] =useState('')
    const[locationName , setlocationName] = useState('new Delhi')
        useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${!locationName?'lucknow':locationName}&units=metric&appid=cbb80bf07447532e73c8edfc3082d6fb`)
            .then((response)=>{
                if (!response.ok) {
                    throw new Error('Network response is not fine')
                } 
                return response.json();
        })
            .then((data)=>{setLocationData(data);
                console.log(data)

            })
            .catch((err)=>{console.log(err)})
}, [locationName])
console.log(`Tae location is ${locationData?locationData.name:'Null'}`);
    // let name = locationData.name;
    
    // const data = JSON.parse(locationData)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLocation('')
        setlocationName(location)
        // console.log(location)


    }
  return (
    

      <div className='box-Navbar'>
      {locationData ? (
          <div>
    <div className='search-box'>
        <div>
        <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder='Type Your Location' />
        <button type='btn' onClick={handleSubmit} >
            <img src='https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/search-circle-64.png' alt='Search'/>
        </button>
        </div>
        <div className='-Name'>{locationData.name}</div>
        </div>

    
    <img className='img' src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png" alt="imageAppear"/>
    <div className='temprature'>
        {Math.floor(locationData.main.temp)}&deg;C
    </div>
    <div className="bottom">
        <span>
            <img src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_44-64.png" alt="humidity" />
            <p>{locationData.main.humidity + ' %'}</p>
        </span>
        <span>
            <img src="https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Windy-64.png" alt="Air Quality" />
            <p>{locationData.wind.speed + ' KM/H'}</p>
        </span>
    </div>
    </div>
        ):(
            <p>Loading...</p>
        )}
    </div>
       
  )
}


