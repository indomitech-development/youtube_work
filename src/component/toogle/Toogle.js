import React,{useState} from 'react'

export default function Toogle() {
    const[show,setShow]=useState(false)
  
  return (
    <div>
        {
            show?
            <h1>haseeb</h1>
            :null
        }
        <button onClick={()=>setShow(true)}>Show</button>
        <button onClick={()=>setShow(false)}>Hide</button>
    </div>
  )
}
