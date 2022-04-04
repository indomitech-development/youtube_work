import React,{useState} from 'react'

export default function Toogl() {
    const[data,setData]=useState(true)
  return (
    <div>
        {
            data?
            <h1>hassan</h1>
            :null
        }
        <button onClick={()=>setData(!data)}>Toogle</button>
    </div>
  )
}
