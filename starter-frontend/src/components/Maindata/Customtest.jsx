import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Select,
  Box,
  IconButton,
  Collapse,
  Tab,
} from "@mui/material";
import {TabList, TabPanel, TabContext} from '@mui/lab';
import { Star } from "@mui/icons-material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Atheletes from "./Atheletes";

const HeaderTab = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('1');

  const toggleOpen = () => {
      setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar sx={{ backgroundColor: "#5E6D76", justifyContent: "space-between", }}>

        {/* Left Section */}
        <Toolbar sx={{ justifyContent: "space-between", width: "80vw", }}>
          <Box sx={{justifyContent: "flex-start"}}><Button color="inherit" href="#why-movesbook">Customer testimonials</Button></Box>
          <Box sx={{justifyContent: "flex-end"}}>
            <IconButton color="inherit" aria-label="star">
                <Star />
            </IconButton>
            <Button color="inherit" href="#your-feedbacks">Your feedbacks</Button>
          </Box>
        </Toolbar>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", width: "20vw" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginRight: "8px" }}>
              Language:
            </Typography>
            <Select
              defaultValue="de"
              size="small"
              sx={{
                color: "#fff",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value="de">Select Language</MenuItem>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="fr">Deutsch</MenuItem>
              <MenuItem value="es">Italiano</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">Hindi</MenuItem>
            </Select>
          </Box>
          <IconButton onClick={toggleOpen}>
            {open ? <ArrowDropUpIcon sx={{color: "#E8E8E8"}} /> : <ArrowDropDownIcon sx={{color: "#E8E8E8"}} />}
          </IconButton>
        </Box>
      </Toolbar>
      <Collapse in={open}>
        {/* Tabs Section */}
        <Box sx={{ width: '100%', backgroundColor: "#E8E8E8", justifyContent: "flex-start", display: 'block' }}>
          <TabContext value={value}>
            <Box>
            <TabList
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{
                    borderBottom: "2px solid #333",  // Adding border at the bottom of the tabs
                    display: 'flex',  // Ensures the tabs are displayed as a row
                    flexDirection: 'column',  // Keeps tabs in a horizontal layout
                    width: '100%'  // Ensures it takes full width
                  }}
            >
                <Tab value="1" label="Athletes & Single users" />
                <Tab value="2" label="Coaches" />
                <Tab value="3" label="Teams" />
                <Tab value="4" label="Clubs" />
            </TabList>
            </Box>
            <Box sx={{ width: '100%', backgroundColor: "#E8E8E8", justifyContent: "flex-start", display: 'block' }}>
              <TabPanel value="1" ><Atheletes /></TabPanel>
            </Box>
          </TabContext>
          
        </Box>
        
        {/* {value === 0 && (
            <Atheletes />
        )}
        {value === 1 && (
            <Customdetails />
        )} */}
      </Collapse>
    </AppBar>
  );
};

export default HeaderTab;
