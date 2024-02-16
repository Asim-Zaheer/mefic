"use client"
import Container from "./Container"
import Common from "./Common"
import Link from "next/link"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from "@mui/material"
import { Box } from "@mui/material"
import {useMediaQuery} from "@mui/material"
export default function Capital(){
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTabletScreen = useMediaQuery('(max-width:899px)');
    const isXSmallScreen = useMediaQuery('(max-width:300px)');
    const isLargeScreen = useMediaQuery("(max-width:1092px)");
    const isXLargeScreen = useMediaQuery("(max-width:1300px)");
  
    const Data=[
        { "image": "assets/meras.svg" },
        { "image": "assets/meras.svg" },
        { "image": "assets/hotel1.svg" },
        { "image": "assets/karam.svg" },
        { "image": "assets/sultan.svg" },
        { "image": "assets/body.svg" },
        
    ]
    return(
        <>
        <Box sx={{backgroundColor:"#FFFF"}} >
        <Container>
        <Box sx={{ display: "flex", justifyContent:isLargeScreen?"center": "center", alignItems: "center", textAlign: "center" }}>
  <Common H1="MEFIC Capital" bold="Portfolio" paragraph="Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands." H2="" />
</Box>

<Box sx={{  fontFamily: "Open Sans", fontWeight: "600", fontSize: "16px", display: "flex", justifyContent: "space-evenly", pb: "6%" }}>
  <Link href="#"  style={{
          color: "#3D3D3D",
          textDecoration: "none",
          transition: "color 0.3s",
          textDecoration:"none",
          "&:hover": {
            backgroundColor: "red",
          },
        }} >
    All
  </Link>
  <Link href="#" style={{color:"#E95A0C"  }}>
    Real Estate
  </Link>
  <Link href="#" style={{color:"#E95A0C"  }} >
    Equity Funds
  </Link>
</Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}> 
          <Grid container
            spacing={2}                      
            sx={{
              display: "flex",
              flexWrap: "wrap",          
              justifyContent: "center",
            }}
          >
            {Data.map((item, index) => (
              <Grid item xs={12} sm={4} md={2} key={index}> {/* Adjusted grid item sizes for better layout */}
                <Card sx={{ minWidth: 120, zIndex: 1    ,  }}> {/* Ensure minimum card width for smaller screens */}
                {/* <Image {item.image} /> */}
                <img srcSet={item.image} width="100%" evolution={2} height="100%"  alt="" />
                  {/* <CardMedia
                    component="img"
                    image={item.image}
                    sx={{
                      objectFit: "cover",   
                      height: '26vh',
                    //   width:"18vw"       
                    }}
                  /> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      </Box>
        </>
    )
}