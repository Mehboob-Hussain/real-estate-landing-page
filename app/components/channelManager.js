import { Box, Button, Card, CardActions, CardContent, Grid, Icon, Link, Typography } from '@mui/material'
import React from 'react'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import AddCardIcon from '@mui/icons-material/AddCard';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const ChannelManager = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', py: '4rem', marginLeft: '10rem', marginRight: '10rem', Height: '100vh' }}>
            <Box>

                <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>About Milestone Homes</Typography>
                <Typography variant='body1' >We got mentioned and listed on various platforms. You can find us here.</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexWrap: 'wrap', gap: '3rem' }} >
                <Box sx={{ marginBottom: { xs: 0, md: '4rem' } }} >
                    <Card sx={{ minWidth: { xs: '250px', md: '290px' }, maxWidth: { xs: '100%', md: '290px' }, height: { xs: 300, md: 250 }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
                        <CardContent>
                            <Box sx={{ bgcolor: '#FFD8E6', borderRadius: '10px', padding: '10px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Diversity2Icon />
                            </Box>
                            <Typography variant="h6" component="div">
                                Only the best Properties
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box >
                    <Card sx={{ minWidth: { xs: '250px', md: '290px' }, maxWidth: { xs: '100%', md: '290px' }, height: { xs: 300, md: 250 }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
                        <CardContent>
                            <Box sx={{ bgcolor: '#FFD8E6', borderRadius: '10px', padding: '10px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Diversity2Icon />
                            </Box>
                            <Typography variant="h6" component="div">
                                All projects in in top locations
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexWrap: 'wrap', gap: '3rem' }} >
                <Box sx={{ marginBottom: { xs: 0, md: '4rem' } }}>
                    <Card sx={{ minWidth: { xs: '250px', md: '290px' }, maxWidth: { xs: '100%', md: '290px' }, height: { xs: 300, md: 250 }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
                        <CardContent>
                            <Box sx={{ bgcolor: '#FFD8E6', borderRadius: '10px', padding: '10px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <DataThresholdingIcon />
                            </Box>
                            <Typography variant="h6" component="div">
                                Secure payments
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box >
                    <Card sx={{ minWidth: { xs: '250px', md: '290px' }, maxWidth: { xs: '100%', md: '290px' }, height: { xs: 300, md: 250 }, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}>
                        <CardContent>
                            <Box sx={{ bgcolor: '#FFD8E6', borderRadius: '10px', padding: '10px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <AddCardIcon />
                            </Box>
                            <Typography variant="h6" >
                                New home in one week
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>


    )
}

export default ChannelManager