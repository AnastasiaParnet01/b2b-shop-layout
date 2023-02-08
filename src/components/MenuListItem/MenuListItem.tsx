import React, { useState } from 'react';

import {
  Button, Menu, MenuItem, Fade, Box,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

type MenuListItemProps = {
  title: string,
}

export const MenuListItem: React.FC<MenuListItemProps> = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        id="fade-button"
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownIcon />}
        sx={{ textTransform: 'none', fontSize: { md: '14px', xs: '12px' }, flexWrap: 'wrap' }}
      >
        {title}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: { width: anchorEl?.offsetWidth },
        }}
      >
        <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>Link1</MenuItem>
        <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>Link2</MenuItem>
        <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>Link3</MenuItem>
      </Menu>
    </Box>
  );
};
