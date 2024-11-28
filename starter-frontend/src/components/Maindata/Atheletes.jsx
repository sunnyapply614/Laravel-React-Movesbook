import React from "react";
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
import { FormatUnderlined, Star } from "@mui/icons-material";

const Atheletes = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#E8E8E8",  width: "100%", }}>
      <Toolbar sx={{ backgroundColor: "#7092BE", }}>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <Select
              defaultValue="de"
              size="small"
              sx={{
                color: "#333",
                backgroundColor: "#E8E8E8",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value="de">All Countries</MenuItem>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="fr">Deutsch</MenuItem>
              <MenuItem value="es">Italiano</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">Hindi</MenuItem>
            </Select>
            <Typography variant="body1" sx={{ marginLeft: "10px" }} >
              <Button href="#reset" sx={{ color: "white" }}>Reset</Button>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, }}>
            <Typography variant="body1" sx={{ marginLeft: "10px" }} >
                Athletes/Single user
            </Typography>
          </Box>
        </Box>
        
      </Toolbar>
      <Toolbar sx={{ backgroundColor: "#333", justifyContent: "space-between", }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginLeft: "10px" }} >
            Data Here
            </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Atheletes;
