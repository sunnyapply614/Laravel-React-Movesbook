import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Appstore from './Appstore';
import Grid from '@mui/system/Grid';
import Link from '@mui/material/Link';

const Mainfoot = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div style={{display: 'flex', height: '530px', backgroundColor: '#333', }}>
      {isOpen && (
          <Appstore />
      )}
      <Box
        sx={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '200px',
            // justifyContent: 'flex-start'
            // borderRadius: '8px'
        }}
        >
        {/* Image 1: Windows */}
        <Box sx={{ textAlign: 'center', marginBottom: '16px' }}>
            <img
            src="assets/img/dashboard/icon/windows.png"
            alt="Windows Icon"
            // style={{ marginBottom: '8px' }}
            />
        </Box>

        {/* Image 2: Android */}
        <Box sx={{ textAlign: 'center', marginBottom: '16px' }}>
            <img
            src="assets/img/dashboard/icon/android.png"
            alt="Android Icon"
            // style={{ marginBottom: '8px' }}
            />
            <div style={{ height: '1px', width: '10%', backgroundColor: 'white', position: 'absolute' }} />
        </Box>

        {/* Image 3: Apple */}
        <Box sx={{ textAlign: 'center', marginBottom: '16px' }}>
            <img
            src="assets/img/dashboard/icon/apple.png"
            alt="Apple Icon"
            // style={{ marginBottom: '8px' }}
            />
            <div style={{ height: '1px', width: '10%', backgroundColor: 'white', position: 'absolute' }} />
        </Box>

        {/* Arrow Icon */}
        <Box sx={{ margin: '16px 0', cursor: 'pointer' }} onClick={toggleSection}>
        {isOpen ? (
                <ArrowBackIosIcon className="icon" />
            ) : (
                <ArrowForwardIosIcon className="icon" />
            )}
        </Box>

        {/* Satisfaction Guaranteed Logo */}
        <Box>
            <img
            src="assets/img/dashboard/icon/satisfaction_guarantee.png"
            alt="Satisfaction Guaranteed"
            style={{ width: '100%', height: 'auto' }}
            />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "20px" }}>
        <Grid container spacing={15}>
            {/* Support Assistance Section// About us */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" style={{fontSize: '16px'}} gutterBottom>
                    Support Assistance
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Support Center
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Warranty info
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Guidelines
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Tutorials
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    FAQs
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Question & Answer
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Forums
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Contact us
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Feedbacks
                    </Link>
                </Typography>
                {/* About us */}
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography variant="h6" style={{fontSize: '16px'}} gutterBottom>
                    About us
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Company
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Products
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    News
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Work with us
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    The brand
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    E-newsletter
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Calender Activities
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Press Media Center
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Partners Apps
                    </Link>
                </Typography>
            </Grid>

            {/* Movesbook Section */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" style={{fontSize: '16px'}} gutterBottom>
                    Movesbook
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    What is Movesbook
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Terminology
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    People of Movesbook
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Workouts Tracking
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Plan Workouts
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Connect with your coach
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Upload Workouts
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Find a coach for you
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Sign In
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Registration
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Your Account
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Your Profile
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Privacy Policy
                    </Link>
                </Typography>
            </Grid>

                {/* Community Section */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" style={{fontSize: '16px'}} gutterBottom>
                    Community
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Blog
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Forum
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Races and Events
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Articles
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Web
                    </Link>
                </Typography>
            </Grid>

            {/* Products Section */}
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" style={{fontSize: '16px'}} gutterBottom>
                    Products
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Athlete Edition
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Coach Edition
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Team Edition
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Club Edition
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Apps
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    iPhone, iPod, iPad
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Android
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Windows Mobileh
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    BlackBarry
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    bada
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    GPS Apps
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Shop
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{color: '#20CCD3', fontSize: '14px'}} color="inherit" underline="hover">
                    Devices
                    </Link>
                </Typography>
                <div style={{ height: '1px', width: '15%', backgroundColor: 'white', position: 'absolute' }} />
                <Typography component="div">
                    <Link href="#" style={{fontSize: '14px'}} color="inherit" underline="hover">
                    Heart rate monitors
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{fontSize: '14px'}} color="inherit" underline="hover">
                    GPS Sport Watches
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{fontSize: '14px'}} color="inherit" underline="hover">
                    RFid Readers
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{fontSize: '14px'}} color="inherit" underline="hover">
                    Badge readers
                    </Link>
                </Typography>
                <Typography component="div">
                    <Link href="#" style={{fontSize: '14px'}} color="inherit" underline="hover">
                    Sensors
                    </Link>
                </Typography>
            </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Mainfoot;