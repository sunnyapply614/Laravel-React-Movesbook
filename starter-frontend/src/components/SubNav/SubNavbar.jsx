import React, {useState} from "react";
// import "./HeaderTab";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Tabs, 
  Tab,
} from "@mui/material";

const SubNavbar = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#E8E8E8", color: "#AF180F",  pl: '30px'  }}>
      <Toolbar sx={{ justifyContent: "space-between", gap: '10px' }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", gap: 3, backgroundColor: "#E5C11A", width: "30vw", }}>
          <Button color="inherit" href="#why-movesbook">Profiles: See who's using Movesbook</Button>
        </Box>
        
        <img src="assets/img/dashboard/ajax-loader(1)90.gif" />

        <Tabs
            value={value}
            onChange={handleChange}
            textColor="#F69989"
            sx={{
                display: 'flex',  // Ensures the tabs are displayed as a row
                flexDirection: 'column',  // Keeps tabs in a horizontal layout
                width: '100%'  // Ensures it takes full width
              }}
        >
            <Tab value={0} label="VIP users" />
            <Tab value={1} label="Athletes" />
            <Tab value={2} label="coaches" />
            <Tab value={3} label="teams" />
            <Tab value={3} label="testimonials" />
            <Tab value={3} label="populars" />
            <Tab value={3} label="users" />
            <Tab value={3} label="last logged" />
            <Tab value={3} label="our clubs" />
        </Tabs>

      </Toolbar>
    </AppBar>
  );
};

export default SubNavbar;
