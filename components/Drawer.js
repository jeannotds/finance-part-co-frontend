import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import InfoIcon from '@mui/icons-material/Info';

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const PAGES =  ["Home", "AboutUs", "Project", "signup"];
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            {PAGES.map((page, index)=>(
                <ListItemButton component="a" href={page} onClick={() => setOpenDrawer(false)} key={index}>
                    <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            ))}
            
        </List>
         {/* <List>
                <ListItemButton >
                    <ListItemIcon>
                        <ListItemText>Home</ListItemText>
                        <ListItemText>About Us</ListItemText>
                        <ListItemText>Project</ListItemText>
                        <ListItemText>Sign Up</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            
        </List> */}
      </Drawer>
      <IconButton sx={{color: "#0D99FF", marginLeft:"auto"}} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComp;
