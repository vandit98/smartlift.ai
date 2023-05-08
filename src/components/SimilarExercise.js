import React from 'react'
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar"

function SimilarExercise({equipment,targetMuscles}) {

    console.log(targetMuscles)

    console.log(equipment)
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    {targetMuscles.length !== 0 ? <HorizontalScrollBar data={targetMuscles}/> : <h1>Loading</h1>}

    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> for exercises
    </Typography>
    {equipment.length !== 0 ? <HorizontalScrollBar data={equipment}/> : <h1>Loading</h1>}
    
    </Box>
  )
}

export default SimilarExercise