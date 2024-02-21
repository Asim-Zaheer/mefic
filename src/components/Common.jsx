"use client"
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material";
import Container from "./Container";


const Common = ({ H1, main, H2,bold, paragraph}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("600"));
  const isTabletScreen = useMediaQuery("(max-width:899px)");
  const isXSmallScreen = useMediaQuery("(max-width:300px)");

  return (
    <>
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            py: "7%",
            px:isMobile?"0%": isTabletScreen?"11%" :"8%"
            // py: isLargeScreen ? "1%" : "8%", // Adjust the padding for large screens
          }}
        >
          <Grid container>
            <Grid item lg={6} xs={12} md={6} order={isTabletScreen ? 2 : 1}  >
              <Typography>
                <span
                  style={{
                    color: "#001B2E",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "45px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "normal",
                  }}
                >
                  {H1}
                </span>
                &nbsp;
                <span
                  style={{
                    color: "#001B2E",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {main}
                </span>
                <span
                  style={{
                    color: "#001B2E",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "normal",
                  }}
                >
                  {H2}
                </span>
                <span
                  style={{
                    color: "#E95A0C",
                    fontFamily: "clash display",
                    fontSize: isTabletScreen ? "25px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  {bold}
                </span>
              </Typography>
                <Typography sx={{borderBottom:"5px solid #2D3C65" ,maxWidth:isXSmallScreen?"37  vh":isMobile?"17vh":isTabletScreen?"20vh":'30vh' , pb:"2%"}}> </Typography>
              <Typography
                sx={{
                  color: "#001B2E",
                  fontFamily: "clash display",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  marginTop: "5%",
                  // inline: "block",
                }}
              >
              </Typography>
              
            </Grid>

          </Grid>
        </Box>
    </>
  );
};
export default Common;
