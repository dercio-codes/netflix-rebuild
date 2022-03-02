import React from 'react'
import { Box, Grid, Stack, Typography } from "@mui/material";




const Kid = () => {
  return (
      <>
      <Box
      sx={{
        height: "85vh",
        display:"flex",
        background: "black",
        borderBottom: "8px solid #222",
      }}
    >
      <Grid container>

      <Grid
          item
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="kids.png"
            alt=""
             width="1200px"
             height="400px"
            style={{
              height: "55vh",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
      

            {/* <ReactPlayer
              // autoplay
              loop="true"
              width="300px"
              height="140px"
              url="vid.m4v"
              url="https://www.youtube.com/watch?v=IE8HIsIrq4o"
             style={player}
            /> */}

      
    
        </Grid>
      <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            color:'#eee',
            flexDirection:'column',
            padding:'40px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "800",
            //   textAlign: "center",
            }}
          >
        Create profiles for kids.
          </Typography>
          <Typography variant="h5">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </Typography>
          <br />

        </Grid>
       
  
      </Grid>
    </Box>
      
      
      </>
  )
}

export default Kid