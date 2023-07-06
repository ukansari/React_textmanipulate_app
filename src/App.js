// import logo from './logo.svg';
import Navbar from './component/Navbar';
import Text from './component/Text';
import Alert from './component/Alert';
import About from './component/About';

import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode , setMode]=useState('light')
  const [textMode,setTextMode]=useState('Enable DarkMode')
  const [alert,setAlert]=useState("")
  
  function darkMode(){
    if (mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      setTextMode('Enable LightMode')
      document.title='DarkMode Enabled'
      showAlert("DarkMode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='#e9ecef'
      setTextMode('Enable DarkMode')
      document.title='LightMode Enabled'
      showAlert("LightMode Enabled","success")


    }
  }
const showAlert=(message,type)=>{
setAlert({
  message:message,
  type:type
})
}
setTimeout(()=>{
   setAlert(null);
},2000);
  
  return (
    <>
    <BrowserRouter>
     <Navbar darkMode={darkMode} mode={mode} textMode={textMode}/>
     <Alert alert={alert}/>
     <div className='container'>
      <Routes>
        <Route path='about' element={<About mode={mode} />}>
        </Route>
        <Route path='/' element={<Text mode={mode} textMode={textMode} showAlert={showAlert}/>}>
        </Route>
        
      </Routes>
     </div>
    </BrowserRouter>
     {/* <Text mode={mode} textMode={textMode} showAlert={showAlert}/>  */}
    
    </>
  );
}

export default App;
