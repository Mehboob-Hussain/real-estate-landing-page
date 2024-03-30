"use client"
import React from 'react'
import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DrawarNav from './drawarNav';
const NavBar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <AppBar sx={{ background: 'transparent', boxShadow: 'none', position: 'relative' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography sx={{ fontStyle: 'italic', fontFamily: 'cursive' }} variant='h4' >Milestone Homes</Typography>
                    {
                        isMatch ? (
                            <>
                                <DrawarNav />
                            </>

                        ) : (
                            <Tabs textColor="inherent" sx={{ '& .MuiTab-root': { fontWeight: 800 }, '& .MuiTab-root:hover': { color: '#FFD700' } }} >
                                <Tab label="Home" />

                                <Tab
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            Services
                                            <ArrowDropDownIcon />
                                        </Box>
                                    }
                                />
                                <Tab
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            Resources
                                            <ArrowDropDownIcon />
                                        </Box>
                                    }
                                />
                                <Tab label="For Sale" />
                                <Tab label="For Rent" />
                                <Tab label="Customers" />
                                <Button variant="contained" size="small" sx={{
                                    borderRadius: '4px', color: '#000', px: '12px', backgroundColor: '#FFD700', '&:hover': {
                                        backgroundColor: '#B8860B',
                                    }
                                }}>Contact</Button>
                            </Tabs>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;