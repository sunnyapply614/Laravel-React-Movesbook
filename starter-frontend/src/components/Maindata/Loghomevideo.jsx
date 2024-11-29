import React, {useState} from "react";
import { Box, Typography, Button, TextField, Tabs, Tab, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Grid from "@mui/system/Grid";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import SelectOption from "@material-tailwind/react/components/Select/SelectOption";

const Homevideo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const countries = ['USA', 'Canada', 'UK', 'Australia'];
  const genders = ['Male', 'Female', 'Other'];

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, password, country, gender });
  };

  return (
    <Box sx={{ padding: 2, pr: 5, backgroundColor: "#fff", display: "block", height: "500px", justifyItems: "flex-end" }}>
      <Box
        sx={{
          backgroundColor: "#800000",
          color: "#fff",
          textAlign: "center",
          width: "700px",
          pl: 2
        }}
      >
        <button onClick={toggleSection}>
          {isOpen ? (<ArrowDropUpIcon className="icon" />) : (<ArrowDropDownIcon className="icon" />)}
        </button>
        <Typography sx={{ fontWeight: "bold", width: "300px", alignContent: "center" }}>
          WAYS TO GET STARTED
        </Typography>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="#F69989"
            sx={{
                borderBottom: "2px solid #333",  // Adding border at the bottom of the tabs
                display: 'flex',  // Ensures the tabs are displayed as a row
                flexDirection: 'column',  // Keeps tabs in a horizontal layout
                width: '100%'  // Ensures it takes full width
              }}
        >
            <Tab value={0} label="Single user" />
            <Tab value={1} label="Coache" />
            <Tab value={2} label="Team" />
            <Tab value={3} label="Club" />
        </Tabs>
      </Box>
      {isOpen && (
        <Box sx={{ display: "block", justifyItems: "flex-end", }}>
          <Box
            sx={{
              border: "1px solid #800000",
              padding: 2,
              backgroundColor: "#f5f5f5",
              width: "700px",
              color: "black",
            }}
          >
            <Grid container spacing={1} sx={{gap: 5}}>
              <Grid item xs={4} >
                <Typography variant="body2">Trial Base</Typography>
                <Typography variant="body2">Trial for club members</Typography>
                <Typography variant="body2">User - base version</Typography>
                <Typography variant="body2">User - premium</Typography>
                <Typography variant="body2">User - professional</Typography>
              </Grid>
              <Grid item xs={1} sx={{ color: "#800027" }}>
                <Typography variant="body2" align="left">
                  :€101
                </Typography>
                <Typography variant="body2" align="left">
                  :€10
                </Typography>
                <Typography variant="body2" align="left">
                  :€100
                </Typography>
                <Typography variant="body2" align="left">
                  :€123
                </Typography>
                <Typography variant="body2" align="left">
                  :€100
                </Typography>
              </Grid>
              <Grid item xs={2} >
                <Typography variant="body2">Duration</Typography>
                <Typography variant="body2">Duration</Typography>
                <Typography variant="body2">Duration</Typography>
                <Typography variant="body2">Duration</Typography>
                <Typography variant="body2">Duration</Typography>
              </Grid>
              <Grid item xs={1} >
                <Typography variant="body2">361 days</Typography>
                <Typography variant="body2">365 days</Typography>
                <Typography variant="body2">360 days</Typography>
                <Typography variant="body2">123 days</Typography>
                <Typography variant="body2">180 days</Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: "grid", gap: "15px", }} >
                <Button sx={{backgroundColor: "#444444", borderRadius: "8px", color: "white", fontSize: "12px"}}>Info Versions</Button>
                <Button sx={{backgroundColor: "#444444", borderRadius: "8px", color: "white", fontSize: "12px"}}>News about version</Button>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              border: "1px solid #800000",
              padding: 2,
              backgroundColor: "#f9f9f9",
              display: "block",
              width: "700px",
              height: "100%"
              // height: "100%"
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00bfff",
                  color: "#fff",
                  width: "200px",
                }}
              >
                🔒 Social Login
              </Button>
            </Box>
            <Box sx={{display: 'block', height: '210px', overflow: 'auto'}}>
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                size="small"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                size="small"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                size="small"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                size="small"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                size="small"
                type="password"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Repeat Password"
                size="small"
                type="repassword"
                margin="normal"
              />
              <FormControl fullWidth variant="outlined" size="small" margin="normal">
                <InputLabel>Country</InputLabel>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  label="Country"
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>{country}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" size="small" margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  label="Gender"
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* Button */}
              <Box sx={{gap: '50px'}}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#880517", color: "#fff", marginTop: 2, width: '150px' }}
                >
                  Submit
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#880517", color: "#fff", marginTop: 2, width: '150px' }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
       )}
    </Box>
  );
};

export default Homevideo;
