import React from "react"
import './app.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Packages from './Pages/Packages'
import Goa from './Components/destination/Goa/Goa'
import Home from './Components/Home'
import Kerela from "./Components/destination/Kerela/Kerela";

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Packages" element={<Packages />} />
                <Route path="Goa" element={<Goa />} />
                <Route path="Kerela" element={<Kerela />} />
            </Routes>
        </Router>
    )
}

export default App