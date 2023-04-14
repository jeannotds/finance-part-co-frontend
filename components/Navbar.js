import React, { useState } from "react";
import { AppBar, Typography, Tabs, Tab, useTheme,useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import DrawerComp from "./Drawer";

function Navbar() {

    const [value, setValue] = useState();
    const theme = useTheme();
    
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const PAGES =  ["Home", "AboutUs", "Project", "signup"];

  return (
    <React.Fragment>
      {/* AppBar // Barre d'application */}
      <AppBar sx={{ background: "#F2F6FC" }}>
        {/* ToolBar / Barre d'outil */}
        <Toolbar>
          {/* Typography limite le nombre de caractere */}
          <Typography sx={{ color: "#0D99FF", fontWeight: "bolder", fontSize:"30px" }}>
            FinP
          </Typography>
          {isMatch ? (
            <>
                <Typography>FinP</Typography>
                <DrawerComp />
            </>
          ): (
          <>
            <Tabs sx={{marginLeft:"auto"}} value={value} onChange={(e, value) => setValue(value)}   indicatorColor="secondary">
                {
                    PAGES.map((page, index)=>(
                        <Tab key={index} label={page}></Tab>
                    ))
                }
            </Tabs>
          </>)}
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
