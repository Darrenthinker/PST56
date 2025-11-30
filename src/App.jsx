import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PayDuty from './components/PayDuty'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay-duty" element={<PayDuty />} />
      </Routes>
    </div>
  )
}

export default App
