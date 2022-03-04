import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const grey = {
  margin:"10px 0",
  color: "#555",
  '&:hover':{
      cursor:"pointer",
    textDecoration:"underline"
}
};

const greyUnder = {
  marginTop:"40px ",
  fontSize:"14px",
  // height:"100px",
  color: "#555",
  '&:hover':{
      cursor:"pointer",
    textDecoration:"underline"
}
}
const item = {
    marginTop:"40px",
    display:"flex",
    flexDirection:"column"
  
}
const Footer = () => {
  return (
    <Box
      sx={{
        height: "auto",
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
           FAQ
          </Typography>
          <Typography sx={grey} variant="p">
          Investor Relations
          </Typography>
          <Typography sx={grey} variant="p">
            Term of use
          </Typography>
          <Typography sx={grey} variant="p">
            contact us
          </Typography>
        
        </Grid>
        <Grid item md={3} sx={item}>
        <Typography sx={grey} variant="p">
          Help center
          </Typography>
          <Typography sx={grey} variant="p">
            jobs
          </Typography>
          <Typography sx={grey} variant="p">
            privacy
          </Typography>
          <Typography sx={grey} variant="p">
           speed test
          </Typography>

        </Grid>
        <Grid item md={3} sx={item}>
        <Typography sx={grey} variant="p">
        Account
          </Typography>
          <Typography sx={grey} variant="p">
          Redeem Gift Cards
          </Typography>
          <Typography sx={grey} variant="p">
          Cookie Preferences
          </Typography>
          <Typography sx={grey} variant="p">
          Legal Notices
          </Typography>
       
        </Grid>
        <Grid item md={3} sx={item}>
        <Typography sx={grey} variant="p">
        Media Center
          </Typography>
          <Typography sx={grey} variant="p">
          Ways to Watch
          </Typography>
          <Typography sx={grey} variant="p">
          Corporate Information
          </Typography>
          <Typography sx={grey} variant="p">
          Only on Netflix
          </Typography>
        </Grid>
      </Grid>
      <p style={greyUnder}>
        
      Netflix South Africa
        </p> 
      
    </Box>
  );
};

export default Footer;
