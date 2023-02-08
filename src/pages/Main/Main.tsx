import React from 'react';
import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';

export const Main: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography
        component="div"
        sx={{
          height: '30px',
          backgroundColor: 'primary.main',
          color: 'white',
          display: { sm: 'flex', xs: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
          typography: { md: 'xs', xs: 'xxs' },
        }}
      >
        {`Flexible delivery: When it suits you best //
        We are one step ahead when it comes to children's wear //
        We cover all needs: Basic - Fashion - Outdoor`}
      </Typography>
      <Header />
      <Outlet />
    </Box>
  );
};
