// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
const [mode, setmode] = useState("light")
const [newAlert, setnewAlert] = useState(null)
const handleAlert=(type,msg)=>{
  setnewAlert({
  type:type,
  msg:msg,
})
setTimeout(() => {
  setnewAlert();
},1250);
}
const handleMode=()=>{
  if(mode==="light"){
    setmode("dark")
    document.body.style.backgroundColor="black"
    handleAlert("success","Dark Mode Enabled")
  }
  else{
    setmode("light")
    document.body.style.backgroundColor="white"
    handleAlert("success","Dark Mode Disnabled")
  }
}
  return (
    <>
        <Navbar mode={mode} handleMode={handleMode} />
        <Alert newAlert={newAlert}/>
        <div className="container my-2" >
         <TextForm mode={mode} handleAlert={handleAlert}/>
        </div>
    </>
  );
}

export default App;
