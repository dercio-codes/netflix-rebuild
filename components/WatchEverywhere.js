import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const WatchEverywhere = props => {
  return (
    <Box   sx={{
        display: "flex",
        justifyContent: "center",
        color:'#eee',
        background:'black',
        borderBottom: "8px solid #222",
        flexDirection:'column',
        padding:'32px 160px'
      }}>
         <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                }}
              >
               Watch everywhere.
              </Typography>
              <br />
              <Typography variant="h5" sx={{
                  width:'60%'
              }}>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </Typography>
    </Box>
  )
}


export default WatchEverywhere;