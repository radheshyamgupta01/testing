import React from 'react'
import Sign from './Component/Auth/Sign'
import LoginForm from './Component/Auth/Login'
import {BrowserRouter,Router,Route, Routes}  from "react-router-dom"
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Price from './Component/Price/Price'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div>
    
    <Header></Header>
{/* <Routes>
  <Route path="/sign">
<Sign></Sign>
  </Route>
  <Route path="/login">
<Sign></Sign>
  </Route>
</Routes> */}
    {/* <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/sign">
        <Sign></Sign>
        </Route>
      </Routes>
    </BrowserRouter> */}

  

<LoginForm></LoginForm>
  
 
    </div>
  )
}

export default App