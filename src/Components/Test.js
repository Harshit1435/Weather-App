import React, {  useState } from 'react'

export default function Test() {
    const [locationData, setLocationData] = useState('');
    const[data, setDate] = useState('')

   const handleChange=()=>{
    console.log(locationData)
    setLocationData('')
    setDate(locationData)

   }

  return (
    <div>
        <input type="text" value={locationData} onChange={(e)=>{setLocationData(e.target.value)}} placeholder='type value name' />
        <div>
        {data}
        </div>
        <button type='button'onClick={handleChange} >Submit</button>
      
    </div>
  )
}
