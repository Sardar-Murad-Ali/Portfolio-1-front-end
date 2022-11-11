import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Socket from 'socket.io-client'
let socket=Socket.connect()

// let socket=Socket.connect("http://localhost:5000")


const Home=React.lazy(()=>import("./pages/Home"))
const Projects=React.lazy(()=>import("./pages/Projects"))
const Discord=React.lazy(()=>import("./pages/Discord"))
const Login=React.lazy(()=>import("./pages/Login"))


const App = () => {

  return (
    <div >
      <BrowserRouter>
       <React.Suspense fallback={<CircularProgress/>}>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/projects'  element={<Projects/>}/>
         <Route path='/discord'  element={<Discord socket={socket}/>}/>
         <Route path='/register'  element={<Login/>}/>
       </Routes>
      </React.Suspense>
      </BrowserRouter>

    </div>
  )
}

export default App
