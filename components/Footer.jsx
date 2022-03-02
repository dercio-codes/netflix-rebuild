import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const grey = {
  color: "#555",
  '&:hover':{
      cursor:"pointer",
    textDecoration:"underline"
}
};
const item = {
    marginTop:"40px",
    display:"flex",
    flexDirection:"column"
  
}
const Footer = () => {
  return (
    <Box
      sx={{
        height: "55vh",
        background: "black",
        padding: "50px 100px",
      }}
    >
      <Typography variant="p" sx={grey}>
        Questions? Call 0 801-000-723
      </Typography>
      <Grid container>
        <Grid item md={3} sx={item}>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
        </Grid>
        <Grid item md={3} sx={item}>
        <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
        </Grid>
        <Grid item md={3} sx={item}>
        <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
        </Grid>
        <Grid item md={3} sx={item}>
        <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
          <Typography sx={grey} variant="p">
            hello world
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
