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
} from "@mui/material";

import { Twitter, Facebook, YouTube, Pinterest, RssFeed } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar >

        <Box sx={{ display: "flex", alignItems: "center", gap: 4, pl: '10vw' }}>
          <Button color="inherit" href="#forum" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/optimize.png" />TV 16:9 Optimized</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/fast_tracking.png" />Fast Workout Tracking</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/workout_player.png" />Workout Player</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/mobile_version.png" />Mobile Version</Button>
          <Button color="inherit" href="#blog" sx={{ whiteSpace: 'nowrap', gap: '7px', fontSize: '12px' }} ><img src="assets/img/dashboard/footer/cloud_storage.png" />Cloud Storage</Button>
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: 1, pl: 10, }}>
            <IconButton href="#twitter" color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton href="#facebook" color="inherit" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton href="#youtube" color="inherit" aria-label="YouTube">
              <YouTube />
            </IconButton>
            <IconButton href="#pinterest" color="inherit" aria-label="Pinterest">
              <Pinterest />
            </IconButton>
            <IconButton href="#rss" color="inherit" aria-label="RSS">
              <RssFeed />
            </IconButton>
          </Box>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Footer;
