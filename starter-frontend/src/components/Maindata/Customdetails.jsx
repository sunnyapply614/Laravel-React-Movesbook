import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/system/Grid";

const Customdetails = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 3, px: 0, mt: 0, mr: 0, }}>
      {/* Testimonials Grid */}
      <Grid container spacing={2}>
        {/* Testimonial Card */}
        <Grid item xs={12} sm={6} md={3} sx={{ width: "375px" }}>
          <Box sx={{backgroundColor: "#800000", borderTopLeftRadius:"10px", }}>Most popular workouts</Box>
          <Box
            sx={{
                backgroundColor: "#333333",
                color: "#fff",
                padding: 2,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                borderBottomLeftRadius: "10px",
                height: "100px"
            }}
            >
            {/* Image on the left */}
            <Box
                component="img"
                src="assets/img/dashboard/anneH.jpg" // Replace with your image path
                alt="AnneH"
                sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                marginRight: 2,
                }}
            />

            {/* Text content on the right */}
            <Box sx={{ textAlign: "left", display: "block" }}>
                <Typography variant="body1" fontWeight="bold" >AnneH</Typography>
                <Typography variant="body2">Did 1:13:08 hours Running</Typography>
                <Typography variant="body2">9.88 km</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Sponsor Card 1 */}
        <Grid item xs={12} sm={6} md={3} sx={{ width: "375px" }} >
          <Box sx={{backgroundColor: "#800000"}}>Sponsors</Box>
          <Box
            sx={{
              backgroundColor: "#333333",
              backgroundImage: 'url(assets/img/dashboard/sponsor_1.jpg)',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#fff",
              padding: 2,
              textAlign: "center",
              display: "block",
              height: "100px",
            }}
          >
          </Box>
        </Grid>

        {/* Sponsor Card 2 */}
        <Grid item xs={12} sm={6} md={3} sx={{ width: "375px" }} >
          <Box sx={{backgroundColor: "#800000"}}>Sponsors</Box>
          <Box
            sx={{
              backgroundColor: "#333333",
              backgroundImage: 'url(assets/img/dashboard/sponsor_1.jpg)',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#fff",
              padding: 2,
              textAlign: "center",
              display: "block",
              height: "100px",
            }}
          >
          </Box>
        </Grid>

        {/* Sign-Up Button */}
        <Grid item xs={12} sm={6} md={3} sx={{ width: "375px" }} >
          <Box sx={{ backgroundColor: "#800000", borderTopRightRadius:"10px", }}>Sponsors</Box>
          <Box
            sx={{
              backgroundColor: "#333333",
              color: "#fff",
              padding: 2,
              textAlign: "center",
              display: "block",
              height: "100px",
              borderBottomRightRadius:"10px",
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            <Button href="#" sx={{backgroundColor: "#2AC4CC", color: "#000", display: "block", width: "250px" }}>
                <Typography variant="body2" fontWeight="bold" >Sign up free</Typography>
                <Typography variant="body2">single user trial version</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customdetails;
