import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const cardsData = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' }
];

const OurService = () => {
  return (
   <>
   <Grid container spacing={2}>
   <Grid item xs={12} md={6}>
   <Typography sx={{
      fontSize: "5vh",
      color: "#fff",
      fontWeight: "",
      '@media (max-width:600px)': {
        fontSize: "3vh" // Adjust font size for smaller screens
      }
    }}>
      Our <span style={{ fontSize: "5vh", fontWeight: "bold" }}>Services</span> & <span style={{ color: "#E95A0C", fontSize: "5vh", fontWeight: "bold" }}>Expertise</span>
    </Typography>
   </Grid>
    </Grid>
   <Grid container spacing={2}>
      {/* Left Section */}
      <Grid item xs={12} md={6}>
        <div style={{ padding: '16px' }}>
          <Typography variant="h4" color="#fff" gutterBottom>
            What
          </Typography>
          <Typography variant="h4" color="#fff" gutterBottom>
            together?
          </Typography>
          <Typography variant="h4" color="#fff">
            problem
          </Typography>
          <Typography variant="h4" color="red">
            can we solve
          </Typography>
        </div>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} justifyContent="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{height:"50vh" }}>
              <Card
                sx={{
                  '&:hover': {
                    backgroundColor: 'red',
                    maxHeight: '50vh', // Set max height to 50% of the viewport height
                    height: '24vh',
            // Set height to 20% of the viewport height
                    overflowY: 'auto' // Enable vertical scrolling if content overflows
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.content}</Typography>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default OurService;
