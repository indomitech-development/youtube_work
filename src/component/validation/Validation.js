import React,{useState} from 'react'

export default function Validation() {
    const[fname,setFname]=useState()
    const[lname,setLname]=useState()
    const[pass,setPass]=useState()
    const[email,setEmail]=useState()
    const[data,setData]=useState(false)
    const[dta,setDta]=useState(false)
    const[dt,setDt]=useState(false)
    const[d,setD]=useState(false)

function getData(e){
    e.preventDefault()
    if(fname>4 || lname>4 ||  pass<8 || email>7){
        alert("value is valid")
    }
 
   
}
function getfname(e){
    let item=e.target.value
    if(item.length>4){
       setData(true)
    }
    else{
        setData(false)
    }
    setFname(item)
}
function getlname(e){
    let item=e.target.value
    if(item.length>4){
        setDta(true)
    }
    else{
        setDta(false)
    }
   setLname(item)
}
function getpassword(e){
        var item=e.target.value
        if(item.length>4 && item.length<8){
   setDt(true)
        }
        else{
            setDt(false)
        }
        setPass(item)
}
function getEmail(e){
    var item=e.target.value
    if(item.length>17){
setD(true)
    }
    else{
        setD(false)
    }
    setEmail(item)
}
  return (
    <div><br/>
        <form onSubmit={getData}>
        <label>First Name:</label>
        <input type="text" placeholder='First_Name' onChange={getfname} />{data?<span>valid value</span>:null}<br/><br/>
        <label>Last Name:</label>
        <input type="text" placeholder='Last_Name' onChange={getlname} />{dta?<span>valid value</span>:null}<br/><br/>
        <label>Password:</label>
        <input type="password" placeholder='password' onChange={getpassword}/>{dt?<span>valid password</span>:null}<br/><br/>
        <label>Email:</label>
        <input type="Email" placeholder='Email' onChange={getEmail}/>{d?<span>email is valid</span>:null}<br/><br/>
        <button>submit</button>
        </form>
    </div>
  )
}
