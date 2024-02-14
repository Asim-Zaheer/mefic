import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import Container from './Container';
import dynamic from 'next/dynamic';

// Import useMediaQuery from '@mui/material' dynamically
// const useMediaQuery = dynamic(() => import('@mui/material/useMediaQuery'), {
//   ssr: false,
// }); 
export default function Cards({ H1, para, image,link_href }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTabletScreen = useMediaQuery('(max-width:899px)');
  const isXSmallScreen = useMediaQuery('(max-width:300px)');

  return (
    <>
      <Container>
        <Card
          sx={{
            background: '#FFFF',
            mx: isXSmallScreen ? '2%' : isMobile ? '2%' : '3%',
            maxWidth: isMobile ? '90%' : isTabletScreen ? 470 : 470,
            minHeight:isTabletScreen?100: 200,
            position: 'relative',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)',
            mt: isMobile ? '10%' : '',
          }}
        >
          <CardMedia sx={{ height: isMobile?150:190 }} image={image} />
          <CardContent>
            <Typography sx={{ fontWeight: '600px', fontFamily: 'Open Sans', fontSize: isMobile ? '14px' : '20px' }} gutterBottom variant="h5" component="div">
              {H1}
            </Typography>
            <Typography sx={{ fontWeight: '400px', fontFamily: 'Open Sans', fontSize: isMobile ? '12px' : '14px', letterSpacing: '3%' }} variant="body2" color="text.secondary">
              {para}
            </Typography>
          </CardContent>
          <Button   href={link_href} sx={{ display: 'flex', pt: '3vh', ms: '5%', color: '#E95A0C', minWidth:"" }} size="small">
            Learn More...
          </Button>
        </Card>
      </Container>
    </>
  );
}
