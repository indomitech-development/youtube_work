import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Button from './component/button/Button';
import Toogle from './component/toogle/Toogle';
import Toogl from './component/toogl/Toogl';
import Form from './component/form/Form';
import Validation from './component/validation/Validation';
function App() {
  const[data,setData]=useState()
  function getData(val){
     console.log(val.target.value)
     setData(val.target.value)
  }
  return (
    <div className="App">
     <input type="text" onChange={getData} />
     <h1>name:{data}</h1>

     <Button />

     <Toogle />
     <Toogl />
     <Form />
     <Validation />
    </div>

  );
}

export default App;
