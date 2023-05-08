import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ExerciseDetails from "./pages/ExerciseDetails"
import Footer from "./components/Footer"
import {Box} from "@mui/material"
import TrainExercisesDetails from "./components/TrainExercisesDetails"

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
        <Route path="train/:part" element={<TrainExercisesDetails/>}/>
      </Routes>
      

      <Footer/>
    </Box>
  )
}

export default App