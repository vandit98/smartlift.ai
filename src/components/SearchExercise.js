import React,{useState,useEffect} from 'react'
import {Stack,Typography,Box,TextField,Button} from "@mui/material"

import {fetchData,exerciseOptions} from "../utils/fetchData"

import HorizontalScrollBar from "./HorizontalScrollBar"

function SearchExercise({bodyPart,setBodyPart,setExercises}) {

  const [search,setSearch] = useState('')
  const [bodyParts,setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter((item) => 
      item.name.toLowerCase().includes(search) ||
      item.bodyPart.toLowerCase().includes(search) || 
      item.equipment.toLowerCase().includes(search) ||
      item.target.toLowerCase().includes(search))

      console.log(exercisesData)
    setSearch('')
    setExercises(searchedExercises)
    }

    
  }

  return (
    <div id="exercises">
      <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
        <Typography fontWeight={800} sx={{fontSize : {
          lg:'44px',xs:"25px"
        },textAlign:'center',my:5}}>
          Search the awesome <br/> exercises
        </Typography>

        <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalScrollBar data = {bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} isBodyPart/>
        </Box>
      </Stack>
    </div>
  )
}

export default SearchExercise