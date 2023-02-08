import React from 'react';
import Box from '@mui/material/Box';
import { ProductsGrid } from 'components/ProductsGrid/ProductsGrid';
import { SideAccordion } from 'components/SideAccordion/SideAccordion';

export const Shop: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%', marginTop: '30px' }}>
      <Box sx={{ width: '200px' }}>
        <SideAccordion title="Collections" />
        <SideAccordion title="Product Group" />
        <SideAccordion title="Item Category" />
        <SideAccordion title="Brand" />
        <SideAccordion title="Season" />
        <SideAccordion title="Sustainable" />
        <SideAccordion title="Best sold" />
        <SideAccordion title="Sale" />
      </Box>
      <ProductsGrid />
    </Box>
  );
};
