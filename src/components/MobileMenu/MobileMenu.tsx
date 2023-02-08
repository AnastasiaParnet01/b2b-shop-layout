import {
  Toolbar, Divider, Button, IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const MobileMenu: React.FC = () => {
  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button sx={{ width: '150px' }} href="#">my account</Button>
      </Toolbar>
      <Divider />
      <Toolbar sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
      }}
      >
        <Button sx={{ width: '100px' }} href="#">home</Button>
        <Button sx={{ width: '100px' }} href="#">lookbook</Button>
        <Button sx={{ width: '100px' }} variant="outlined" href="#">shop</Button>
      </Toolbar>
      <Divider />
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <IconButton aria-label="Search button">
          <SearchIcon color="primary" />
        </IconButton>
        <IconButton aria-label="Search button">
          <FavoriteBorderIcon color="primary" />
        </IconButton>
        <IconButton aria-label="Search button">
          <ShoppingBagOutlinedIcon color="primary" />
        </IconButton>
      </Toolbar>
    </>
  );
};
