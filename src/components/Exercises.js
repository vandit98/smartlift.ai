import React,{useState,useEffect} from 'react'
import {Box,Typographhy,Stack} from "@mui/material"
import Pagination from "@mui/material/Pagination"
import ExerciseCard from './ExerciseCard'

import {fetchData,exerciseOptions} from "../utils/fetchData"

function Exercises({setExercises,exercises,bodyPart}) {

  const [currentPage, setCurrentPage] = useState(1);



  const paginate = (e,value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1100, behavior: 'smooth' });
  }

  console.log(bodyPart)

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

    if(bodyPart === 'all'){

      exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    }else{
      exerciseData =   await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exerciseData)
    }

    fetchExerciseData();
  }, [bodyPart])
  

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((item,index) => (
          <ExerciseCard id={index} exercise={item}/>
        ))} 
      </Stack>

      <Stack>
        {exercises.length > 0 ? 
        <Pagination 
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        size="large"
        />
        :null}
      </Stack>
    </Box>
  )
}

export default Exercises