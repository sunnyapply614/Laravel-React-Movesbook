import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Box className="logo-section">
          <img
            src="assets/img/dashboard/logo.png" // Replace with your logo's path
            alt="Movesbook Logo"
            className="logo-image"
          />
        </Box>
        <Box className="login-section">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Username"
            className="input-field"
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Password"
            className="input-field"
          />
          <Button variant="contained" className="login-button">
            Login
          </Button>
          <Typography variant="body2" className="forgot-password">
            Forgot Password
          </Typography>
          <Button variant="outlined" className="social-button">
            Login with social
          </Button>
          <Button variant="outlined" className="facebook-button">
            LIKE WITH FACEBOOK
          </Button>
          <Button variant="contained" color="error" className="signup-button">
            SIGN UP FREE
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
