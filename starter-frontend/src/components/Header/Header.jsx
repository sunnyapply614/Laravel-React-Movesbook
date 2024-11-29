import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box } from '@mui/material';
import './Header.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navigation from '../Navigation/Navigation';

const Header = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
      setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Box className="logo-section">
          <img
            src="assets/img/dashboard/logo.png"
            alt="Movesbook Logo"
            className="logo-image"
          />
        </Box>
        <Box className="login-section">
          <img src='assets/img/dashboard/recent-user.jpg' style={{width: '30px'}} />
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
      <Box sx={{ margin: '0px', cursor: 'pointer' }} onClick={toggleSection}>
        {isOpen ? (
                <ExpandLessIcon className="icon" />
            ) : (
                <ExpandMoreIcon className="icon" />
            )}
      </Box>
      <Box>
        {isOpen && (
            <Navigation />
        )}
      </Box>
    </AppBar>

  );
};

export default Header;
