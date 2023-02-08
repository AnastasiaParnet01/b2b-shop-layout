import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Stack, Button, IconButton, Divider, Link, ListSubheader,
  List, Typography, CardMedia, CardContent, Card,
} from '@mui/material';
import { useState } from 'react';

export const ProductItem: React.FC = () => {
  const [image, setImage] = useState<string>('mock_image_green.jpg');

  const onChangeImage = (e: any) => {
    setImage(e.target.src);
  };

  return (
    <Card sx={{
      boxShadow: 'none', display: 'flex',
    }}
    >
      <CardMedia
        component="img"
        alt="green jacket"
        image={image}
        sx={{ objectFit: 'contain', flex: '1', height: '70vh' }}
      />
      <CardContent sx={{ flex: '1', flexDirection: 'column', display: 'flex' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="lg">
            CeLaVi
          </Typography>
          <IconButton size="large">
            <FavoriteBorderIcon />
          </IconButton>
        </Stack>
        <Typography variant="xl">
          CeLaVi - Rainwear Jacket -Solid
        </Typography>
        <Typography variant="xs" color="primary">
          4006
        </Typography>
        <Typography variant="sm" color="primary" sx={{ marginTop: '10px' }}>
          WHS EUR 8.54
        </Typography>
        <Typography variant="sm" color="primary">
          RRP EUR 27.95
        </Typography>
        <Divider sx={{ marginTop: '10px' }} />
        <Typography variant="sm" color="primary" sx={{ marginTop: '10px' }}>
          Rainwear jacket -solid
        </Typography>
        <Typography variant="sm" color="primary" sx={{ marginTop: '10px' }}>
          Composition: 100% Polyester w.Polyurethane coating
        </Typography>
        <Typography variant="sm" color="primary" sx={{ marginTop: '10px' }}>
          MinimalSale
        </Typography>
        <Typography variant="sm" color="primary">
          2 pcs per col/size
        </Typography>
        <Typography variant="sm" color="primary">
          Composition linning: 100% Polyester
        </Typography>
        <List
          sx={{
            maxHeight: 110,
            maxWidth: '100%',
            overflow: 'auto',
          }}
          subheader={<li />}
        >
          <ListSubheader sx={{ padding: 0 }}>Color green</ListSubheader>
          <Divider />
          <Stack direction="row" sx={{ flexWrap: 'wrap', overflowX: 'hidden' }}>
            <IconButton sx={{ width: '40px', padding: '0' }} onClick={(e) => onChangeImage(e)}>
              <CardMedia
                sx={{ objectFit: 'contain' }}
                component="img"
                height="40"
                image="mock_image-yellow.jpg"
                alt="yellow jacket"
              />
            </IconButton>
            <IconButton sx={{ width: '40px', padding: '0' }} onClick={(e) => onChangeImage(e)}>
              <CardMedia
                sx={{ objectFit: 'contain' }}
                component="img"
                height="40"
                image="mock_image-pink.jpg"
                alt="pink jacket"
              />
            </IconButton>
            <IconButton sx={{ width: '40px', padding: '0' }} onClick={(e) => onChangeImage(e)}>
              <CardMedia
                sx={{ objectFit: 'contain' }}
                component="img"
                height="40"
                image="mock_image_green.jpg"
                alt="green jacket"
              />
            </IconButton>
          </Stack>
        </List>
        <Button sx={{ marginTop: '10px' }} variant="contained">add to cart</Button>
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        <Link href="/">More Product information</Link>
      </CardContent>
    </Card>
  );
};
