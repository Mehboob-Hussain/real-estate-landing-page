import React from 'react'
import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Image from 'next/image';
import NavBar from './nav';
const HeroSection = () => {
  return (
    <>
      <Box sx={{ background: '#002147' }}>
        <NavBar />
        <Box sx={{ color: '#fff', py: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', '@media (max-width: 768px)': { gap: '0.5rem', px: '4rem' } }}>
            <Typography variant='h5'>Residential & Office Spaces</Typography>
            <Typography variant='h2' sx={{ '@media (max-width: 768px)': { fontSize: '2rem' } }}>
            Discover a place  <br />
            where you&apos;ll<br />
            love to live
            </Typography>
            <Typography variant='body1'>Best Real Estate Deals, contact now</Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button variant="contained" size="large" sx={{
                borderRadius: '20px', color: '#000', px: '20px', backgroundColor: '#FFD700', '&:hover': {
                  backgroundColor: '#B8860B',
                }
              }}>Contact us</Button>
              <Button variant="text" sx={{ borderRadius: '20px', borderWidth: '2px', borderStyle: 'solid', color: '#fff', px: '20px' }}>More about Us</Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Image src="/hero.png" alt="Login Hero" width="400" height="400" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: '70rem',
          borderRadius: '20px',
          backgroundColor:'#B8860B',
          p: 6,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          position: 'relative',
          top: { md: '-20%' },
          left: { md: '50%' },
          transform: { md: 'translate(-50%, -20%)' },
          color:'white'
        }}
      >

        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>We Got Featured !</Typography>
        <Typography variant='body1'>Award Winning Real Estate Company -we got mentioned and listed.</Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', gap: { xs: '1rem', md: '5rem' } }}>
          <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'white' }}>Capterra</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }}}>GoodFirms</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }}}>Dubai</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }}}>Authorized Agents</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: 0 }, py: { xs: '10px', md: 0 }, justifyContent: 'space-around', margin: '0 6rem' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box >
            <Typography variant="h2" >
              25,00+
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Flats for Sale
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box >
            <Typography variant="h2" >
              1200+
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Properties rented
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          
            <Typography variant="h2" >
              1000+
            </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Home sold
          </Typography>
        </Box>

      </Box>
    </>
  )
}

export default HeroSection