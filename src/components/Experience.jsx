import { Grid, Typography, Link } from "@mui/material";
import Container from "./Container";
import Common from "./Common";
import Box from "@mui/material";
export default function Experience() {
  return (
    <Container>
      <div style={{ backgroundColor: "#fff", width:"125%" }}>
      <Grid sx={{ padding: { xs: '3vh', sm: '9vh',md:'17.5vh' } }}>
      <Typography sx={{ fontSize: { xs: '4vw', sm: '5vh' }, padding: '1vh' }}>
        Our <span style={{ color: "#E95A0C", fontWeight: "bold" }}>Experience, Skills</span> <span>&</span> <br /> Expertise. <span style={{ color: "#E95A0C", fontWeight: "bold" }}>Your Profit.</span>
      </Typography>
      <Typography sx={{ borderBottom: { xs: "0.1vh solid #2D3C65", sm: "0.5vh solid #2D3C65", paddingLeft:"vh" },    maxWidth: {
            xs: "10vh",
            sm: "24vh"
          } ,paddingTop:"2vh"}} />
<Typography variant="body1"  sx={{textAlign:"start",maxWidth:"70vh",paddingTop:"5vh"}}>
Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise.
</Typography>
    </Grid>

        <Grid container spacing={5} sx={{paddingBottom:"10vh" ,  paddingLeft: {
    xs: "30px", // Example padding for extra small screens
    sm: "140px", // Example padding for small screens
    md: "60px", // Example padding for medium screens
    lg: "90px", // Example padding for large screens
    xl: "120px"  // Example padding for extra large screens
  } , width: "100%" }}>
          {[1, 2, 3].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4} style={{ width: "100%" }}>
              <Typography style={{ color: "#E95A0C", fontFamily: "Open Sans", fontWeight: "600", fontSize: "16px" }}>
              </Typography>
              <Typography variant="h4" sx={{ color: "#001B2E", fontFamily: "Open Sans" }}>
                <span>
                  <b>{item === 1 ? "Dramatically" : item === 2 ? "Efficiently unleash" : "Quickly maximize"}</b>
                </span>
                <br />
                {item === 1 ? "maintain solutions" : item === 2 ? "media information" : "timely deliverables"}
                <Typography
                  sx={{
                    color: "#001B2E",
                    borderColor: "#FFFF",
                    marginBottom: "10px",
                    fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                    py: "5%",
                    maxWidth: "500px",
                  }}
                >
                  Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
                </Typography>
              </Typography>
              <Link style={{textDecoration:"none",color: "#E95A0C", fontFamily: "Open Sans", fontWeight: "600", fontSize: "16px" }}>
                learn more ...
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
