import React from 'react';
import { Container, Typography } from '@mui/material';

// sample reusable Footer component
const Footer: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, py: 3 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Website Name. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
