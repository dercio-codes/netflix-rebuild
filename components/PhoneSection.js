import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const PhoneSection = () => {
  return (
    <Box
      sx={{
        minHeight: "65vh",
        background: "black",
        // padding: "50px",
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
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            style={{
              minHeight: "55vh",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <Box
            sx={{
              padding: "16px",
              position: "absolute",
              height: "130px",
              width: "95%",
              display: "flex",
              justifyContent: "center",
              top: "60%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
                background: "rgb(1,1,1)",
                border: "3px solid rgba(21,21,21,1)",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
                style={{
                  height: "80px",
                }}
              />
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Stranger Things
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: "#0071eb",
                    marginTop: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Downloading...
                </Typography>
              </Stack>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
                width={"50px"}
                minHeight={"50px"}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            color:'#eee',
            flexDirection:'column',
            padding:'32px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "800",
            //   textAlign: "center",
            }}
          >
            Download your shows to watch offline.
          </Typography>
          <Typography variant="h5">Save your favorites easily and always have something to watch.</Typography>
          <br />

        </Grid>
      </Grid>
    </Box>
  );
};

export default PhoneSection;
