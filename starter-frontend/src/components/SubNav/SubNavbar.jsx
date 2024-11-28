import React from "react";
// import "./HeaderTab";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  Box,
  IconButton,
} from "@mui/material";

const SubNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#E8E8E8", color: "#AF180F", padding: "0px 0" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", gap: 3, backgroundColor: "#E5C11A", width: "30vw" }}>
          <Button color="inherit" href="#why-movesbook">Profiles: See who's using Movesbook</Button>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
          <Button color="inherit" href="#support">VIP users</Button>
          <Button color="inherit" href="#forum">Athletes</Button>
          <Button color="inherit" href="#blog">Coaches</Button>
          <Button color="inherit" href="#blog">Teams</Button>
          <Button color="inherit" href="#blog">Testimonials</Button>
          <Button color="inherit" href="#blog">Populars</Button>
          <Button color="inherit" href="#blog">Users</Button>
          <Button color="inherit" href="#blog">Last logged</Button>
          <Button color="inherit" href="#blog">Our Clubs</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SubNavbar;
