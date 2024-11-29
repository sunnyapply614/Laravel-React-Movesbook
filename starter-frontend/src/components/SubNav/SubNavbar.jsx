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
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

const SubNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toggleSection = () => {
      setIsOpen(!isOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#E8E8E8", color: "#AF180F",  pl: '30px'  }}>
      <Toolbar sx={{ gap: '10px' }}>
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
                width: '85%'  // Ensures it takes full width
              }}
        >
            <Tab value={0} label="VIP users" />
            <Tab value={1} label="Athletes" />
            <Tab value={2} label="coaches" />
            <Tab value={3} label="teams" />
            <Tab value={4} label="testimonials" />
            <Tab value={5} label="populars" />
            <Tab value={6} label="users" />
            <Tab value={7} label="last logged" />
            <Tab value={8} label="our clubs" />
        </Tabs>
        <Box sx={{ margin: '0px', cursor: 'pointer', width: '7%' }} onClick={toggleSection}>
          {isOpen ? (
                  <ExpandLessIcon sx={{ color: '#333' }} />
              ) : (
                  <ExpandMoreIcon sx={{ color: '#333' }} />
              )}
        </Box>
      </Toolbar>
      <Divider variant="middle"  />
      <Box>
        {isOpen && (
            <Box sx={{ height: '200px' }} />
        )}
      </Box>
    </AppBar>
  );
};

export default SubNavbar;
