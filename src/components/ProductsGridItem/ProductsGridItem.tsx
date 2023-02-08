import {
  Card, CardActions, CardContent, CardMedia, Typography, IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ProductsGridItem: React.FC = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string>('mock_image_green.jpg');

  const onChangeImage = (e: any) => {
    setImage(e.target.src);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="200"
        image={image}
        alt="green jacket"
      />
      <CardContent
        sx={{ '&:hover': { cursor: 'pointer' } }}
        onClick={() => navigate('/product')}
      >
        <Typography gutterBottom variant="sm" align="center" sx={{ color: 'primary.main' }} component="div">
          CeLaVi - Rainwear jacket - solid
        </Typography>
        <Typography gutterBottom variant="sm" align="center" sx={{ color: 'primary.main' }} component="div">
          4006
        </Typography>
        <Typography gutterBottom variant="sm" align="center" sx={{ color: 'primary.main', marginTop: '15px' }} component="div">
          CeLaVi
        </Typography>
        <Typography gutterBottom variant="xs" align="center" sx={{ color: 'primary.main' }} component="div">
          WSP: EUR 8.54
        </Typography>
        <Typography gutterBottom variant="xs" align="center" sx={{ color: 'primary.main' }} component="div">
          RSP: EUR 27.96
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ width: '25px', padding: '0' }} onClick={(e) => onChangeImage(e)}>
          <CardMedia
            sx={{ objectFit: 'contain' }}
            component="img"
            height="25"
            image="mock_image-yellow.jpg"
            alt="yellow jacket"
          />
        </IconButton>
        <IconButton sx={{ width: '25px', padding: '0' }} onClick={(e) => onChangeImage(e)}>
          <CardMedia
            sx={{ objectFit: 'contain' }}
            component="img"
            height="25"
            image="mock_image-pink.jpg"
            alt="pink jacket"
          />
        </IconButton>
        <IconButton sx={{ width: '25px', padding: '0' }} onClick={(e) => onChangeImage(e)}>
          <CardMedia
            sx={{ objectFit: 'contain' }}
            component="img"
            height="25"
            image="mock_image_green.jpg"
            alt="green jacket"
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};
