import React, {useState} from 'react';
import { Box, Button,} from '@mui/material';
import Grid from "@mui/system/Grid";
import "./Maindata.css";

const Appstore = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const buttons = [
    { id: 1, label: 'Android', icon: <img src="assets/img/dashboard/icon/android_icon.png" alt="Android" /> },
    { id: 2, label: 'Android', icon: <img src="assets/img/dashboard/icon/blackberry_icon.png" alt="Android" /> },
    { id: 2, label: 'BlackBerry', icon: <img src="assets/img/dashboard/icon/blackberry_icon.png" alt="BlackBerry" /> },
    { id: 3, label: 'iPhone', icon: <img src="assets/img/dashboard/icon/iphone_icon.png" alt="iPhone" /> },
    { id: 4, label: 'Nokia S60', icon: <img src="assets/img/dashboard/icon/nokias60_icon.png" alt="Nokia" /> },
    { id: 5, label: 'Others', icon: <img src="assets/img/dashboard/icon/other_icon.png" alt="Others" /> },
  ];
  
  return (
    <Grid container sx={{ backgroundColor: '#f2f2f2', padding: 3, color: '#000', width: '680px', height: '530px' }}>
      {/* Left Section */}
      <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center' }}>
        <Box>
            <Box
            component="img"
            src="assets/img/dashboard/android_img.png" // Replace with actual image link
            alt="Phone"
            sx={{ width: '100%', marginBottom: 2 }}
            />

            <Box className="button-pack">
                {buttons.map((button, index) => (
                <Button
                key={button.id}
                onClick={() => handleButtonClick(index)}
                className={`button-item ${activeButton === index ? 'active' : ''}`}
                >
                    <span className="icon">{button.icon}</span>
                    <span className="label">{button.label}</span>
                </Button>
                ))}
            </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D50000',
            color: '#fff',
            marginTop: 1,
            fontWeight: 'bold',
            width: '100%',
            height: '50px',
            '&:hover': {
              backgroundColor: '#B71C1C',
            },
            gap: '5px'
          }}
        >
          <span className="label">DOWNLOAD</span>
          <img src="assets/img/dashboard/download_icon_big.png" />
        </Button>
      </Grid>

    </Grid>
  );
};

export default Appstore;
