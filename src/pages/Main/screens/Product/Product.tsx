import React from 'react';
import {
  Box, Typography, Link, Breadcrumbs,
} from '@mui/material';
import { ProductItem } from 'components/ProductItem/ProductItem';

export const Product: React.FC = () => {
  return (
    <Box sx={{ margin: '10px', height: '100%' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link variant="xs" underline="hover" color="inherit" href="/shop">
          Back
        </Link>
        <Link variant="xs" underline="hover" color="inherit" href="/">
          Rain wear
        </Link>
        <Link variant="xs" underline="hover" color="inherit" href="/">
          Rainwear
        </Link>
        <Typography variant="xs" color="text.primary">4006-974</Typography>
      </Breadcrumbs>
      <ProductItem />
    </Box>
  );
};
