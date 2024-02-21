import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';

const cardsData = [
  { img: './asset-allocation 1.svg', title: 'Assets', titles: 'Management', titless: 'Learn More...', content: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.', btn: 'Learn More' },
  { img: './Private Equity & IB-01 1.svg', title: 'Private', titles: 'Equity & IB', titless: 'Learn More...', content: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.', btn: 'Learn More' },
  { img: './Real Estate Investments-01 1.svg', title: 'Real Estate', titles: 'Investments', titless: 'Learn More...', content: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.', btn: 'Learn More' }
];

const OurService = () => {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Box sx={{ backgroundColor: "#1E2538", padding: { xs: '3vw', sm: '6vw' }, display: "flex", flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography  sx={{ color: "#fff", fontSize: { xs: "4vw", md: "2vw" }, fontWeight: "" }}>
        Our <span style={{ fontWeight: "bold" }}>Services</span> & <span style={{ color: "#E95A0C", fontWeight: "bold" }}>Expertise</span>
      </Typography>
      <Typography variant="" sx={{ color: "#fff", fontSize: { xs: "2vw", md: "1.2vw" }, textAlign: { xs: 'start', md: 'start' }  ,maxWidth:"120vh"}}>
        Office ipsum you  muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container  reinvent container stands. Left you viral relaxation unlock t-shaped.  Ideal deck support attached waste highlights game synchronise.
      </Typography>
    </Box>
      <Box sx={{ padding: { xs: '3vw', sm: '6.6vw' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography sx={{ fontSize: { xs: "4vh", sm: "8vh" }, color: "#fff", fontWeight: "", textAlign: { xs: 'center', sm: 'left' } }}>
          <span style={{ fontWeight: "" }}>What</span> <br /> <span style={{ color: "#fff", fontWeight: "bold" }}>problem</span> <br /> <span style={{ color: "#fff", fontWeight: "" }}>can we <span style={{ color: "#E95A0C" }}>solve  <br /> together<span style={{color:"#fff"}}>?</span>  </span>  </span>
        </Typography>

        {cardsData.map((card, index) => (
          <Box
            key={index}
            width={{ xs: '90%', sm: '40%', md: '20%',lg:"20%"}}
            p="0vw"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: ' ',
              padding:"2vh",
            }}
          >
            <Card
              sx={{
                '&:hover': {
                  backgroundColor: '#E95A0C',
                },
                width: '100%',
              }}
            >
              <CardContent>
                <img src={card.img} alt="" style={{ width: '100%', maxWidth: '50%', objectFit: 'cover' , paddingLeft:"6vh"}} />
                <Typography variant="h5" component="div" paddingTop="1vh" textAlign="center">{card.title}</Typography>
                <Typography variant="h6" component="div" paddingTop="0.5vh" textAlign="center">{card.titles}</Typography>
                <Typography variant="body1" paddingTop="1vh" textAlign="center" sx={{ fontSize: "1.5vh" }}>{card.content}</Typography>
                <br />
                <Link href="/path/to/page" color="inherit" sx={{ textDecoration: "none", textAlign: "center" }}>{card.titless}</Link>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurService;
