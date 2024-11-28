import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex", // Flexbox for row layout
        justifyContent: "center", // Horizontally center the navigation
        width: "100%", // Take up full width
        backgroundColor: "#333",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#333",
          width: "auto", // Auto width based on content
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: { backgroundColor: "#00bcd4", height: "3px" },
            }}
            sx={{
              "& .MuiTab-root": {
                minWidth: "auto", // Auto width based on content
                padding: "0 15px", // Padding between tabs
                color: "#ccc", // Default color
                textTransform: "none", // Remove uppercase
                fontSize: "14px", // Font size for tabs
              },
              "& .Mui-selected": {
                color: "#00bcd4", // Highlight active tab
              },
            }}
          >
            {[
              "Athletes",
              "Coaches",
              "Teams",
              "Groups",
              "Sport Clubs",
              "Club Management",
              "News",
              "Sell-Buy",
              "Job offers",
              "Promote yourself",
              "Our Shop",
            ].map((item, index) => (
              <Tab key={index} label={item} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
