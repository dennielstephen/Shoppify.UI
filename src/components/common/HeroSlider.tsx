import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import bgImage1 from '../../assets/heroImage1.jpg';
import bgImage2 from '../../assets/heroImage2.jpg';
import bgImage3 from '../../assets/heroImage3.jpg';

const images = [bgImage1, bgImage2, bgImage3];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '500px' }}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 500ms ease-in-out',
            background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%), url(${image}) no-repeat center center fixed`,
            backgroundSize: 'cover',
          }}
        />
      ))}
      <Grid container justifyContent="center" alignItems="center" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Grid item xs={12} md={8} lg={6}>
          <Box textAlign="center" sx={{ p: { xs: 4, sm: 6, lg: 10 } }}>
            <Typography variant="h3" component="h1" color="common.white" gutterBottom>
              Welcome to our online store
            </Typography>
            <Typography variant="subtitle1" color="common.white" sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at placerat dui. Duis eget ligula id elit
              tristique maximus in sed arcu.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Shop now
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 0, right: 0 }}>
        <Button sx={{ position: 'absolute', left: 0 }} onClick={handlePrev}>
          <ArrowBackIos />
        </Button>
        <Button sx={{ position: 'absolute', right: 0 }} onClick={handleNext}>
          <ArrowForwardIos />
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSlider;
