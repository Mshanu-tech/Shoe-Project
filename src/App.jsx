import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import './App.css'
import MEN from './pages/MEN';
import WOMEN from './pages/WOMEN';
import Header from './Header';
import Addproduct from './pages/Collection';

const Shoecontext = createContext()

function App() {
  const [shoe, setshoe] = useState([])

  return (
    <>
    
    <BrowserRouter>
    <Shoecontext.Provider value={{shoe,setshoe}}>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='MEN' element={<MEN/>}/>
      <Route path='WOMEN' element={<WOMEN/>}/>
      <Route path='ADD' element={<Header/>}>
      <Route index element={<Addproduct/>}/>
      <Route path='Profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </Shoecontext.Provider>
    </BrowserRouter>
    </>
  )
}


export{
  App
,
  Shoecontext
}
