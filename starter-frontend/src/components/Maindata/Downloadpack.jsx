import React from "react";
import { Container, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/system/Grid";

const devices = [
  {
    name: "iPad",
    image: "assets/img/dashboard/ipad_downoload.jpg", 
  },
  {
    name: "iPhone",
    image: "assets/img/dashboard/iphone_download.jpg", 
  },
  {
    name: "Android",
    image: "assets/img/dashboard/android_downoload.jpg", 
  },
  {
    name: "Windows Phone",
    image: "assets/img/dashboard/window_downoload.jpg", 
  },
  {
    name: "BlackBerry",
    image: "assets/img/dashboard/nokia_download.jpg", 
  },
  {
    name: "Smart Watch",
    image: "assets/img/dashboard/rfid_download.jpg", 
  },
];

const Downloadpack = () => {
  return (
    <Container maxWidth="2g">
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={4} sx={{display: "flex" }}>
                <Box sx={{ width: "240px", backgroundColor: "#fff" }}>
                <Card sx={{ textAlign: "center" }}>
                    <CardMedia
                    component="img"
                    sx={{height: '35vh', objectFit: 'cover', pl: '40px', pr: '40px'}}
                    image="assets/img/dashboard/ipad_downoload.jpg"
                    />
                    <CardContent>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2, gap: '5px', width: '200px' }}
                        href="#"
                    >
                        DOWNLOAD 
                        <img src="assets/img/dashboard/download_icon.png" />
                    </Button>
                    </CardContent>
                </Card>
                </Box>
                <Box sx={{ width: "240px", backgroundColor: "#fff" }}>
                <Card sx={{ textAlign: "center" }}>
                    <CardMedia
                    component="img"
                    sx={{height: '35vh', objectFit: 'cover', pl: '40px', pr: '40px'}}
                    image="assets/img/dashboard/iphone_download.jpg"
                    />
                    <CardContent>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2, gap: '5px', width: '200px' }}
                        href="#"
                    >
                        DOWNLOAD 
                        <img src="assets/img/dashboard/download_icon.png" />
                    </Button>
                    </CardContent>
                </Card>
                </Box>
                <Box sx={{ width: "240px", backgroundColor: "#fff" }}>
                <Card sx={{ textAlign: "center" }}>
                    <CardMedia
                    component="img"
                    sx={{height: '35vh', objectFit: 'cover', pl: '40px', pr: '40px'}}
                    image="assets/img/dashboard/android_downoload.jpg"
                    />
                    <CardContent>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2, gap: '5px', width: '200px' }}
                        href="#"
                    >
                        DOWNLOAD 
                        <img src="assets/img/dashboard/download_icon.png" />
                    </Button>
                    </CardContent>
                </Card>
                </Box>
                <Box sx={{ width: "240px", backgroundColor: "#fff" }}>
                <Card sx={{ textAlign: "center" }}>
                    <CardMedia
                    component="img"
                    sx={{height: '35vh', objectFit: 'cover', pl: '40px', pr: '40px'}}
                    image="assets/img/dashboard/window_downoload.jpg"
                    />
                    <CardContent>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2, gap: '5px', width: '200px' }}
                        href="#"
                    >
                        DOWNLOAD 
                        <img src="assets/img/dashboard/download_icon.png" />
                    </Button>
                    </CardContent>
                </Card>
                </Box>
                <Box sx={{ width: "240px", backgroundColor: "#fff" }}>
                <Card sx={{ textAlign: "center" }}>
                    <CardMedia
                    component="img"
                    sx={{height: '35vh', objectFit: 'cover', pl: '40px', pr: '40px'}}
                    image="assets/img/dashboard/nokia_download.jpg"
                    />
                    <CardContent>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2, gap: '5px', width: '200px' }}
                        href="#"
                    >
                        DOWNLOAD 
                        <img src="assets/img/dashboard/download_icon.png" />
                    </Button>
                    </CardContent>
                </Card>
                </Box>
                <Box sx={{ width: "300px", height: "363px", backgroundColor: "#fff" }}>
                    <Card sx={{ textAlign: "center", height: '363px',paddingTop: '50px', paddingBottom: '50px' }}>
                        <Box sx={{height: '220px'}}>
                            <CardMedia
                            component="img"
                            sx={{height: '200px', width: '100%',alignItems: 'center', objectFit: 'cover', }}
                            image="assets/img/dashboard/rfid_download.jpg"
                            />
                        </Box>
                        <CardContent>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ marginTop: 2, gap: '5px', width: '270px', }}
                                href="#"
                            >
                                DOWNLOAD 
                                <img src="assets/img/dashboard/download_icon.png" />
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    </Container>
  );
};

export default Downloadpack;
