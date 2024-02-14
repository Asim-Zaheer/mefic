import { Grid, Typography, Link } from "@mui/material";
import Container from "./Container";
import Common from "./Common";

export default function Experience() {
  return (
    <Container>
      <div style={{ backgroundColor: "#fff", width: "100%" }}>
        <Common
          H1="our"
          main="Experience,Skills "
          H2="& Expertise."
          bold="Your Profit."
          paragraph="Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise."
        />
        <Grid container spacing={5} sx={{paddingBottom:"12vh" ,paddingLeft: "16vh", width: "100%" }}>
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
              <Link style={{ color: "#E95A0C", fontFamily: "Open Sans", fontWeight: "600", fontSize: "16px" }}>
                learn more ...
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
