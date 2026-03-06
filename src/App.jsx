import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>

      <div className="container d-flex justify-content-center">
        <div style={{width:"375px"}}>

          <Routes>

            <Route path="/" element={<Welcome/>}/>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/account" element={<Account/>}/> */}

          </Routes>

        </div>
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
