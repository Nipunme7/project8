import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import CreateCrewmate from './CreateCrewmate'
import CrewmateGallery from './CrewmateGallery'
import EditCrewmate from './EditCrewmate'
import HomePage from './HomePage'
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create a Crewmate!</Link>
        <Link to="/gallery">Crewmate Gallery</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<CrewmateGallery />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
