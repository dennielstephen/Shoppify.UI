import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  id: number;
  name: string;
  color: string;
  price: number;
  imageUrl: string;
  topSeller?: boolean;
}

const ClickableCard: React.FC<Props> = ({
  id,
  name,
  color,
  price,
  imageUrl,
  topSeller = false,
}) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/product/${id}`);
//   };

  return (
    <Card
      className="cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
    //   onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={name}
        className="object-cover"
      />
      {topSeller && (
        <Typography
          variant="subtitle1"
          className="absolute top-2 left-2 bg-yellow-500 text-white font-bold py-1 px-2 rounded-md"
        >
          Top Seller
        </Typography>
      )}
      <CardContent className="bg-gray-100 p-3">
        <Typography variant="h5" component="h2" className="text-lg font-medium">
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className="text-sm font-medium text-gray-600"
        >
          Color: {color}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className="text-sm font-medium text-gray-600"
        >
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClickableCard;
