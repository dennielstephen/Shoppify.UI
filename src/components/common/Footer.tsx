import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

// sample reusable Footer component
const Footer: React.FC = () => {
    return (
        <footer className="bg-black sticky bottom-0">
          <div className="container mx-auto py-8 px-4">
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h2" className="mb-4 text-white">
                    Products
                    </Typography>
                    <ul className="list-unstyled">
                    <li>
                        <Typography variant="body1" className="text-white">
                        AirMax
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                        Air Jordan
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                        Air Force 1
                        </Typography>
                    </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h2" className="mb-4 text-white">
                    Support
                    </Typography>
                    <ul className="list-unstyled">
                    <li>
                        <Typography variant="body1" className="text-white">
                        FAQs
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                        Contact Us
                        </Typography>
                    </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography variant="h6" component="h2" className="mb-4 text-white">
                  Everything Else
                </Typography>
                <ul className="list-unstyled">
                  <li>
                    <Typography variant="body1" className="text-white">
                      About Us
                    </Typography>
                  </li>
                </ul>
              </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h2" className="mb-4 text-white">
                    Follow Us
                    </Typography>
                    <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        {/* <FacebookIcon /> */}
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        {/* <TwitterIcon /> */}
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        {/* <InstagramIcon /> */}
                        </a>
                    </li>
                    </ul>
                </Grid>
            </Grid>
          </div>
          <div className="bg-black">
            <div className="container mx-auto py-4 px-4">
              <Typography variant="body1" className="text-white text-center">
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
              </Typography>
            </div>
          </div>
        </footer>
      );
}

export default Footer
