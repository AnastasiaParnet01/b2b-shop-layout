import React from 'react';
import {
  Box, Skeleton, Stack, Typography,
} from '@mui/material';

const StyledSkeleton = () => <Skeleton variant="rectangular" animation={false} sx={{ bgcolor: 'grey.600', height: '50px', flexBasis: '150px' }} />;

export const Home: React.FC = () => {
  return (
    <>
      <Box sx={{
        padding: { sm: '0', md: '0 20px' },
        position: 'relative',
        flexGrow: '1',
        width: '100%',
      }}
      >
        <Skeleton variant="rectangular" animation={false} sx={{ bgcolor: 'grey.600', height: '100%' }} />
        <Stack alignItems="center" sx={{ position: 'absolute', bottom: '25%', left: '10%' }}>
          <Typography sx={{ typography: { md: 'xl5', xs: 'xl2' } }}>THE SEASON</Typography>
          <Typography
            sx={{
              fontStyle: 'italic',
              marginBottom: '20px',
              typography: { md: 'xl3', xs: 'xl' },
              '&:after': {
                borderBottom: { md: '8px solid #000', xs: '4px solid #000' },
                content: '""',
                position: 'absolute',
                left: '0',
                right: '0',
                width: '30%',
                bottom: '0',
                margin: '0 auto',
              },
            }}
          >
            OF THERMAL & RAIN WEAR
          </Typography>
        </Stack>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-evenly"
        sx={{ margin: '10px 0px', padding: { sm: '0', md: '0px 20px' }, height: '50px' }}
      >
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
      </Stack>
    </>
  );
};
