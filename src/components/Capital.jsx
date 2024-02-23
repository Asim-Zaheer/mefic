import Container from "./Container";
import Common from "./Common";
import Link from "next/link";
import Card from '@mui/material/Card';
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function Capital() {
    const isLargeScreen = useMediaQuery("(max-width:1092px)");

    const Data = [
        { "image": "assets/hotel1.svg" },
        { "image": "assets/karam.svg" },
        { "image": "assets/hotel1.svg" },
        { "image": "assets/karam.svg" },
        { "image": "assets/sultan.svg" },
        { "image": "assets/body.svg" },
    ];

    return (
      <div style={{ backgroundColor: "#fff",maxWidth:"" }}>

<Container>

<Box sx={{ backgroundColor: "#fff", paddingTop: "5vh", paddingLeft: isLargeScreen ? "" : "5vh" }}>
            <Typography sx={{ fontFamily:"clash display",display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "", fontSize:{sx: "2vh",sm: "4vh",md:"6vh"}  }}>
                MEFIC Capital <span style={{ fontWeight: "bold", color: "#E95A0C" }}> Portfolio</span>
            </Typography>
            <Typography sx={{ fontFamily:"open sans",textAlign: "center", paddingTop: "5vh", paddingBottom: "5vh", paddingLeft: isLargeScreen ? "0" : "12vh" }}>
                Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning of crystallize another container reinvent stands.
            </Typography>
            <Box sx={{ fontFamily: "Open Sans", fontWeight: "600", fontSize: "16px", display: "flex", justifyContent: isLargeScreen ? "center" : "space-between", paddingLeft: isLargeScreen ? "0" : "30vh", paddingTop: "10vh" }}>
                <Link href="#" style={{ color: "#E95A0C", textDecoration: "none", transition: "color 0.3s", "&:hover": { backgroundColor: "red" } }}>
                    All
                </Link>
                <Link href="#" style={{ color: "#E95A0C", textDecoration: "none" }}>
                    Real Estate
                </Link>
                <Link href="#" style={{ color: "#E95A0C", textDecoration: "none" }}>
                    Equity Funds
                </Link>
            </Box>
        </Box>


    <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2 ,paddingLeft:{sx: "15vh",sm: "3vh",md:"35vh"},paddingTop:"10vh"}}>
        <Grid container spacing={2}>
            {Data.map((item, index) => (
                <Grid item xs={4} sm={6} md={2} key={index}>
                    <Card sx={{ minWidth: 130, zIndex: 1 ,display:"flex",justifyContent:"space-between"}}>
                        <img src={item.image} width="100%" height="100%" alt="" />
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
</Container>
        </div>

    );
}
