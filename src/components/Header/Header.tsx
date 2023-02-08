import {
  Box, Stack, Button, IconButton, Drawer, Skeleton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import {
  Link as RouterLink, useNavigate,
} from 'react-router-dom';
import { useState } from 'react';
import { localStorageService } from 'utils/localStorageService';
import { SIGN_IN_SCREEN } from 'routes/routes';
import { MenuListItem } from 'components/MenuListItem/MenuListItem';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    localStorageService.clearStorage();
    navigate(SIGN_IN_SCREEN, { replace: true });
  };

  return (
    <header>
      <Box sx={{
        height: '60px',
        borderBottom: '1px solid #a0a19d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ flex: '1', display: { xs: 'none', md: 'flex' } }}
        >
          <Button component={RouterLink} to="/home">
            Home
          </Button>
          <Button component={RouterLink} to="#">
            Lookbook
          </Button>
          <Button variant="outlined" component={RouterLink} to="/shop">
            Shop
          </Button>
        </Stack>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ marginLeft: '15px', display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'flex', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px' },
          }}
        >
          <MobileMenu />
        </Drawer>
        <Skeleton
          variant="rectangular"
          animation={false}
          sx={{ bgcolor: 'grey.600' }}
          width={150}
          height={30}
        />
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ flex: '1', display: { xs: 'none', md: 'flex' } }}
        >
          <Button href="#">my account</Button>
          <IconButton aria-label="Search button">
            <SearchIcon color="primary" />
          </IconButton>
          <IconButton aria-label="Search button">
            <FavoriteBorderIcon color="primary" />
          </IconButton>
          <IconButton aria-label="Search button">
            <ShoppingBagOutlinedIcon color="primary" />
          </IconButton>
          <Button onClick={logout}>logout</Button>
        </Stack>
        <Button onClick={logout} sx={{ display: { xs: 'block', md: 'none' } }}>logout</Button>
      </Box>
      <Stack direction="row" justifyContent="space-evenly" sx={{ display: { md: 'flex', xs: 'none' } }}>
        <MenuListItem title="Basic Needs" />
        <MenuListItem title="Footwear" />
        <MenuListItem title="Outer Wear" />
        <MenuListItem title="Rain Wear" />
        <MenuListItem title="Socks" />
        <MenuListItem title="Wool" />
        <MenuListItem title="Express" />
      </Stack>
    </header>
  );
};
