import React,{useState} from 'react'

export default function Form() {
    const[name,setName]=useState()
    const[interest,seInterest]=useState()
    const[tnc,setTnc]=useState(false)
    function submitData(e){
        e.preventDefault()
        console.log(name,interest,tnc)
    }
  return (
    <div>
        <form onSubmit={submitData}>
     <input type="text" placeholder='First_Name' onChange={(e)=>setName(e.target.value)} /><br/><br/>
     <select onChange={(e)=>seInterest(e.target.value)}>
         <option>RED</option>
         <option>GREEN</option>
         <option>BLUE</option>
         <option>YELLOW</option>
     </select><br/><br/>
     <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} />
     <span>terms and condition apply</span><br/><br/>
     <button>Submit</button>
     </form>
    </div>
  )
}
