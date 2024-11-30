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

const HeaderTab = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" href="#why-movesbook">Why Movesbook?</Button>
          <Button color="inherit" href="#dealers">Dealers</Button>
          <Button color="inherit" href="#subscribe">Subscribe Newsletter</Button>
          <Button color="inherit" href="#references">References</Button>
          <Button color="inherit" href="#about-us">About Us</Button>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, pl: 5 }}>
          <Button color="inherit" href="#support">Support</Button>
          <Button color="inherit" href="#forum">Forum</Button>
          <Button color="inherit" href="#blog">Blog</Button>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton href="#twitter" color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton href="#facebook" color="inherit" aria-label="Facebook">
              <Facebook />
            </IconButton>
            {/* <IconButton href="#google" color="inherit" aria-label="google">
              <Google />
            </IconButton> */}
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginRight: "8px" }}>
              Language:
            </Typography>
            <Select
              defaultValue="en"
              size="small"
              sx={{
                color: "#fff",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">Deutsch</MenuItem>
              <MenuItem value="it">Italiano</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderTab;
