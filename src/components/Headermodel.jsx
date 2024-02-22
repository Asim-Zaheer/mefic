import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Icon1 from './b1';
import Icon2 from './b2';
import Icon3 from './b3';

function Headermodel() {
  const isLargeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <Box>
      {isLargeScreen && <Icon1 />}
      <Icon3 />
    </Box>
  );
}

export default Headermodel;
