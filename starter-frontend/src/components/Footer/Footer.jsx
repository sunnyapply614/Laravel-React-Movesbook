import React from "react";
// import "./HeaderTab";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Select,
  Box,
  IconButton,
  ButtonGroup
} from "@mui/material";

import { Twitter, Facebook, YouTube, Pinterest, RssFeed } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="static" >
      <Toolbar sx={{ backgroundColor: "#333" }} > 

        <Box sx={{ display: "flex", alignItems: "center", gap: 4, pl: '10vw' }}>
          <Button color="inherit" href="#forum" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/optimize.png" />TV 16:9 Optimized</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/fast_tracking.png" />Fast Workout Tracking</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/workout_player.png" />Workout Player</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/mobile_version.png" />Mobile Version</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/cloud_storage.png" />Cloud Storage</Button>
        </Box>


      </Toolbar>

      <Toolbar sx={{ backgroundColor: "#fff", }} >

        <Box sx={{ display: "flex", alignItems: "center", gap: 4,  }}>
            <img src="assets/img/dashboard/footer/google_webstore.jpg" height="50px" />
        </Box>
        <Box sx={{ display: 'block', }}>
          <Box sx={{ display: "flex", gap: 1, pl: 10, }}>
            <ButtonGroup variant="text" aria-label="Basic button group">
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Terms of use</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Privacy Policy</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Getting Started</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Guidelines</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>FAQ</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Facebook</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Work with us</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Dealers</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Buys and ad</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Developers</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Brands</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>About</Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ display: "flex", gap: 1, pl: 10, }}>
            <ButtonGroup variant="text" aria-label="Basic button group">
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Italiano</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>English(US)</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Expanol</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Portuguise(Brasil)</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Francaise(France)</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Deutsch</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Arabic</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Hindi</Button>
                <Button sx={{ whiteSpace: 'nowrap', fontSize: '10px', color: '#333' }}>Chinese</Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, pl: '5vw', width: '15%' }}>
            <Button sx={{ whiteSpace: 'nowrap', fontSize: '12px', color: '#333' }}>Downloads</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Footer;
