"use client"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const DrawarNav = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const drawerItems = ["Home", "Services", "Resources", "For Sale","For Rent", "Customers", "contact"]
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        drawerItems.map((item, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuOutlinedIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawarNav