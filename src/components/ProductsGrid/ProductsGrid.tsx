import {
  Typography, Stack, Box, Button, Grid,
} from '@mui/material';
import { ProductsGridItem } from 'components/ProductsGridItem/ProductsGridItem';
import { MenuListItem } from 'components/MenuListItem/MenuListItem';

export const ProductsGrid: React.FC = () => {
  return (
    <Box sx={{ margin: '10px 20px', flex: '1' }}>
      <Stack
        alignItems="center"
        sx={{
          marginBottom: '25px',
          justifyContent: { lg: 'space-around', xs: 'space-between' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Button variant="outlined">Reset Filter</Button>
        <Typography
          gutterBottom
          sx={{ color: 'primary.main', margin: 0, typography: { md: 'sm', xs: 'xs' } }}
        >
          SHOWING 12 PRODUCTS
        </Typography>
        <MenuListItem title="PRODUCT (SORTING)" />
      </Stack>
      <Grid sx={{ paddingBottom: '10px' }} container spacing={2}>
        {[...Array(12)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid key={index} item md={3} sm={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProductsGridItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
