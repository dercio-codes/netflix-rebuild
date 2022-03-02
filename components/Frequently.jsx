import React from "react";
import { Box, Grid, Stack,TextField,Button, Typography } from "@mui/material";
import { padding } from "@mui/system";

const pad = {
  padding: "40px 20px",
};

const Frequently = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        background: "black",
        borderBottom: "8px solid #222",
      }}
    >
      <Grid container>
        <Grid md={12} item style={pad}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "800",
              color: "white",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" align="center" sx={{color:"white",margin:"10px 0",fontSize:"15px"}}>
              Ready to watch? Enter your email to create or restart your membership.
              </Typography>
          <Box
            style={{
              height:"50px",
              width:"100%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            
            <TextField
              variant="filled"
              placeholder="Email address"
              sx={{
                width: "400px",
                height:"100%",
                background: "white",
                // padding:"10px"
              }}
            />
            <Button
              variant="filled"
              sx={{
                  height:"100%",
                background: "#e50914",
                color: "#eee",
                fontWeight: "900",
                "&:hover": {
                  background: "#e50914",
                  color: "#aaa",
                  fontWeight: "900",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Frequently;
