import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container  from "./Container";

const TextBox = () => {
  // Check if window is defined, meaning the code is running on the client-side
  const theme = typeof window !== 'undefined' ? useTheme() : null;
  const is600Screen = typeof window !== 'undefined' ? useMediaQuery(theme.breakpoints.down("sm")) : false; // Matches screen width 600px or smaller

  return (
    <Container>    <Card
      sx={{
        paddingLeft: is600Screen ? "0vh" : "12vh",
        maxWidth: "80vh",
        backgroundColor: "inherit",
        
      
    }}
      elevation={0}
    >
      <CardContent>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "",
            color: "white",
            fontSize: 50,
            marginBottom: 2
          }}
        >
          Your future financial <span style={{ fontSize: '40px', fontWeight: '80px' }}>Investment </span>
  made easier with{" "}
          <Typography
            variant="h2"
            component="span"
            sx={{
              color: "#E95A0C"
            }}
          >
            MEFIC
          </Typography>
        </Typography>
        <Typography sx={{ borderBottom: "5px solid #2D3C65", maxWidth: "26vh" }}></Typography>
        <Typography sx={{ color: "#fff", paddingLeft: "vh" }}>
          Office ipsum you must be muted. Convers1ation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex" }}>
        <Button
          variant="contained"
          sx={{
            minHeight: "60px",
            minWidth: "200px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            transform: "scale(0.8)",
            backgroundColor: "#E95A0C"
          }}
        >
          Book a Consultant
        </Button>
        <Button
          variant="outlined"
          sx={{
            minHeight: "47px",
            minWidth: "100px",
            color: "#fff",
            borderColor: "#E95A0C"
          }}
        >
          Login
        </Button>
      </CardActions>
    </Card>
    </Container>

  );
};

export default TextBox;
