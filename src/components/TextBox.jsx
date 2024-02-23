import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "./Container";
import { Box } from "@mui/material";

const TextBox = () => {
  const theme = useTheme();
  const is600Screen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container>
      <Card
        sx={{
          paddingLeft: is600Screen ? "0vh" : "15vh",
          maxWidth: "100vh",
          backgroundColor: "inherit",
          elevation: 0,
        }}
      >
        <CardContent>
          <Box sx={{ textAlign: "", marginTop: { xs: "20px", md: "0px" } }}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "6vw", md: "60px" },
                fontWeight: 400,
                marginBottom: 0,
                fontFamily: "Geneva",
                paddingTop: "vh",
                fontFamily:"Clash Display"
              }}
            >
              Your future financial{" "}
              <span style={{ fontSize: "5vw", fontWeight: 120, paddingTop: "" }}>
                Investment{" "}
              </span>
              made easier with{" "}
              <Typography
                component="span"
                sx={{ color: "#E95A0C", fontSize: { xs: "4vw", md: "50px" } }}
              >
                MEFIC
              </Typography>
            </Typography>
            <Typography
              sx={{ borderBottom: "0.7vh solid #2D3C65", maxWidth: { xs: "25vw", md: "40vh" } }}
            />
            <Typography
              sx={{
                color: "#fff",
                paddingLeft: { xs: "0vw", md: "0vw" },
                paddingRight: { xs: "3vw", md: "3vw" },
                paddingTop: { xs: "30px", md: "40px" },
                fontFamily:"Open Sans"
              }}
            >
              Office ipsum you must be muted. Conversation banner gave dive investigation chime
              usability whatever. Winning of crystallize another container reinvent stands. Left you
              viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game
              synchronize.
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex" }}>
          <Button
            variant="contained"
            sx={{
              minHeight: is600Screen ? "8vh" : "60px",
              minWidth: is600Screen ? "25vw" : "200px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              transform: "scale(0.8)",
              backgroundColor: "#E95A0C",
              fontFamily:"Open Sans",
              fontWeight:"600",
              
            }}
          >
            Book a Consultant
          </Button>
          <Button
            variant="outlined"
            sx={{
              minHeight: is600Screen ? "6vh" : "47px",
              minWidth: is600Screen ? "15vw" : "100px",
              color: "#fff",
              borderColor: "#E95A0C",
              fontFamily:"Open Sans",
              fontWeight:"600"
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
