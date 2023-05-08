import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { trainExercisesData } from "../utils/TrainExerciseData";
import Box from "@mui/material/Box";

function TrainExercises() {
  return (
    <>
      <Typography
        fontWeight={800}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "25px",
          },
          textAlign: "center",
          py: 5,
        }}
        id="train-exercises"
      >
        Train these awesome <br /> exercises
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {trainExercisesData.map((item, index) => {
          return (
            <>
              <Card sx={{ minWidth: 545 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="340"
                  image={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Start Exercise
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </Box>
    </>
  );
}

export default TrainExercises;
