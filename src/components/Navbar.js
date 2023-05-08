import React from 'react'
import {Link} from "react-router-dom"

import {Stack} from "@mui/material"
import Logo from "../assets/images/Logo.png"
function Navbar() {
  return (
    <Stack
    direction="row" sx={{gap:{
        sm:'122px',xs:"40px"},
        mt: {sm:'32px',xs:"20px"}}} justifyContent="none">
          <Link to="/">
      <img src={Logo} alt="logo" width="48px" height="48px"/>

          </Link>

      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      align-items="flex-end">
        <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #3A1212'}}>Home</Link>
        <a href="#train-exercises" style={{textDecoration:'none',color:'#3A1212'}}>Train Exercises</a>
        <a href="#exercises" style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>

      </Stack>
    </Stack> 
  )
}

export default Navbar