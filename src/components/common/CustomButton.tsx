import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { Button } from '@mui/material';

// Sample reusable button component
interface CustomButtonProps extends ButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, ...props }) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
