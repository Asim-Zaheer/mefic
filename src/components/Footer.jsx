import React, { useState, useEffect } from 'react';
import Container from './Container';
import { Box, Button, Link, Typography } from '@mui/material';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { List, ListItem, ListItemText } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTabletScreen = useMediaQuery('(max-width:899px)');
    const isLargeScreen = useMediaQuery('(min-width:900px)');

  const listItems1 = [
    { label: 'Assets Management', url: '/#' },
    { label: 'Private Equity & IB', url: '/#' },
    { label: 'Real Estate Investments', url: '/link3' },
  ];
  const listItems2 = [
    { label: 'About Us', url: '/#' },
    { label: 'Contact Us', url: '/#' },
    { label: 'Careers', url: '/link3' },
  ];
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : '230px',
            width: '100%',
            pt: '5%',    
            pb: '3%',
            justifyContent:"center"
            // alignItems: 'center',
            // marginRight:"1%",
            // overflowY  :"hidden"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection:"column",
              justifyContent: 'start',
              alignContent: 'center',
              marginLeft: isMobile ? '2%' : '0',
              marginRight: isMobile ? '0' : '20%',
              height: '100%',
              width: isMobile ? '80%' : isLargeScreen?'33%':isTabletScreen?"27%":"60%",
              marginLeft:"2%"
              // paddingLeft:"3%" 
            }}
          >
            <Image src="./weblogo 2.svg" alt="" width={100} height={50} />
            <Typography
              sx={{
                fontFamily: 'Open Sans',
                color: '#FFFF',
                fontWeight: '400',
                fontSize: isMobile ? '10px' :isTabletScreen?'12px' :isLargeScreen? '15px':'16px',
                mt: isMobile ? '3%' : '8%',
                mb:'5%',
                display:"flex",
                flexDirection:"row", justifyContent:"center"
              }}
            >
              Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: isMobile ? '3%' : '0' }}>
    <EmailIcon sx={{ color: '#FFFF', mr: '5px' }} />
    <Link href="#" sx={{ color: '#C3C3C3','&:hover':{color:"#E95A0C"}, fontFamily: 'Satoshi Variable', fontWeight: '500', fontSize: isMobile ? '14px' : isTabletScreen ? '15px' : '15px',textDecoration:"none" }}>
        info@domain.com
    </Link>
</Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems:"center",
              flexDirection: 'column',
              // justifyContent: 'center',
              // mt: isMobile ? '5%' : '0',
              // ml: isMobile ? '0' : '5%',
              width: isMobile ? '100%' : isLargeScreen?'40%':isTabletScreen?"30%":"30%",
            }}
          >
            <Typography sx={{ fontFamily: 'Open Sans', fontWeight: '700', fontSize: isMobile ? '22px' : isTabletScreen ? '16px' : '18px', color:isMobile ?'#E95A0C':"#FFFF" ,display:"flex" ,pr:isMobile?"5%":" "}}>Solutions</Typography>
            <List sx={{ color: '#FFFF' }}>
              {listItems1.map((item, index) => (
                <ListItem key={index}>
                  <Link href={item.url}style={{textDecoration:"none"}}  >
                    <ListItemText primary={item.label}sx={{ m:'0' ,fontFamily: 'Open Sans', color: '#FFFF', fontWeight: isMobile ? '200' : '400',font:"20px" ,display:"flex",alignItems:"center" }} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {!isMobile && (
    <Box style={{ height: isLargeScreen ? "22vh" : isTabletScreen ? "33vh" : '25vh', borderLeft: '1px solid #2D3C65' }} />
)}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // justifyContent:"center",
              // mt: isMobile ? '5%' : '0',
              // ml: isMobile ? '0' : '5%',
              width: isMobile ? '100%' : isLargeScreen?'20%':"30%",
            }}
          >
            <Typography sx={{ fontFamily: 'Open Sans', fontWeight: '700', fontSize: isMobile ? '22px':isTabletScreen?"16px" : '18px',  color:isMobile ?'#E95A0C':"#FFFF" }}>Helpful Links</Typography>
            <List>
              {listItems2.map((item, index) => (
                <ListItem key={index}>
                  <Link  style={{textDecoration:"none"}} href={item.url}>
                    <ListItemText primary={item.label} sx={{ m: '0', fontFamily: 'Open Sans', color: '#FFFF', fontWeight: '400'}} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {!isMobile && (
    <Box style={{ height: isLargeScreen ? "22vh" : isTabletScreen ? "33vh" : '25vh', borderLeft: '1px solid #2D3C65' }} />
)}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  width: isMobile ? '100%' : '10%' ,mx:isLargeScreen?"2%":" " }}>
            <Typography sx={{ fontFamily: 'Open Sans', fontWeight: '700',fontSize: isMobile ? '22px':isTabletScreen?"13px" :isLargeScreen? '15px':"18px",  color:isMobile ?'#E95A0C':"#FFFF", marginBottom: isMobile ? '0' :isTabletScreen?"15px" :'0' ,pr:isMobile?"3%":" " }}>Follow us</Typography>
            <Box sx={{ display: 'flex', flexDirection:isMobile?"row" :'column', my: isMobile ? '2%' : '40%' ,pr:isMobile?"5%":" "}}>
              <Link href="#" target="_blank" paddingRight={isMobile?"10%":"" }  >
                <FacebookIcon sx={{ color: '#FFFF','&:hover':{color:"#E95A0C"} }} />
              </Link>
              <Link href="#" target="_blank"  paddingRight={isMobile?"10%":""}>
                <LinkedInIcon sx={{ color: '#FFFF','&:hover':{color:"#E95A0C"} }} />
              </Link>
              <Link href="#" target="_blank">
                <TwitterIcon sx={{ color: '#FFFF','&:hover':{color:"#E95A0C"} }} />
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            borderBottom: '1px solid #2D3C65',
            // mt: isMobile ? '5%' : '0',
          }}
        ></Box>
        <Box>
          <Typography
            sx={{
              fontFamily: 'Open Sans',
              color: '#FFFF',
              fontWeight: '600',
              fontSize: isMobile ? '12px' : '14px',
              display: 'flex',
              justifyContent: 'center',
              
              py:'1%'
            }}
          >
            © {currentYear} MEFIC Capital. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
