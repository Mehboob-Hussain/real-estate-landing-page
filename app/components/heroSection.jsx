import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import NavBar from './nav';

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative', // Ensure relative positioning for z-index to work
          backgroundImage: "url('/image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <NavBar />
        <Box
          sx={{
            position: 'relative', // Ensure relative positioning for z-index to work
            zIndex: 1, // Set a higher z-index to ensure text appears above the background image
            color: '#fff', // Text color
            textAlign: 'center',
            padding: '20px', // Adjust padding as needed
          }}
        >
          <Typography variant='h5'>Residential & Office Spaces</Typography>
          <Typography variant='h2' sx={{ '@media (max-width: 768px)': { fontSize: '2rem' } }}>
            Discover a place<br />
            where you'll<br />
            love to live
          </Typography>
          <Typography variant='body1'>Best Real Estate Deals, contact now</Typography>
          <Box sx={{ display: 'flex', gap: '1rem', marginTop: 4 }}>
            <Button variant="contained" size="large" sx={{
              borderRadius: '20px',
              color: '#000',
              px: '20px',
              backgroundColor: '#FFD700',
              '&:hover': {
                backgroundColor: '#B8860B',
              }
            }}>Contact us</Button>
            <Button variant="text" sx={{
              borderRadius: '20px',
              borderWidth: '2px',
              borderStyle: 'solid',
              color: '#fff',
              px: '20px'
            }}>More about Us</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
