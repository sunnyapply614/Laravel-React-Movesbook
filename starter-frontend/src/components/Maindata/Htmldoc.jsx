import React from "react";
import { Box, Typography, Button, Paper, List, ListItem, ListItemText, Link } from "@mui/material";
import Grid from '@mui/system/Grid';

const Htmldoc = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", }}>
      <Paper elevation={3} sx={{ padding: "20px", }}>
        <Box
            sx={{
                backgroundColor: "#EEE",
                padding: "10px 20px",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            >
            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: "bold", whiteSpace: "nowrap", }}>HTML DOCUMENTS</Typography>

            {/* Buttons */}
            <Box sx={{ justifyContent: 'flex-end' }}>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: "#444",
                    color: "#fff",
                    textTransform: "none",
                    marginRight: "10px",
                    "&:hover": { backgroundColor: "#555" },
                }}>Reduce All</Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#444",
                        color: "#fff",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#555" },
                }}>More Documents</Button>
            </Box>
        </Box>

        <Box
            sx={{
                backgroundColor: "#EEE",
                marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                display: "block",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            >
            <Box sx={{
                backgroundColor: "#DDD",
                // marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography sx={{ fontWeight: "bold" }}>ClubEdition</Typography>
            </Box>
            <Box sx={{
                backgroundColor: "#DDDDD",
                marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography>Club edition - append in standard mode</Typography>
            </Box>
            <Box sx={{ padding: '10px', display: 'block' }}>
                <Typography>Gym Management</Typography>
                <img src="assets/img/dashboard/WPGYM-preview-image.png" href="#" alt="Gym Management" style={{ width: "50%", borderRadius: "20px" }} />
                <Typography>Live PreviewScreenshots</Typography><br/>
                <Typography>Share<br/>Facebook Google Plus Twitter Pinterest<br/>Add to Favorites<br/>Add to Collection<br/>
                WPGYM – Wordpress Gym Management System ideal Wordpress plugin for your Wordpress powered gym management system.
                </Typography>
            </Box>
        </Box>

        <Box
            sx={{
                backgroundColor: "#EEE",
                marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                display: "block",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            >
            <Box sx={{
                backgroundColor: "#DDD",
                // marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography sx={{ fontWeight: "bold" }}>Applets</Typography>
            </Box>
            <Box sx={{
                backgroundColor: "#DDDDD",
                marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography>Applets - append in standard mode</Typography>
            </Box>
            <Box sx={{ padding: '10px', display: 'block' }}>
                <Typography>Gym management system is an easy-to-use gym and health club membership management system.<br/> 
                    It helps you keep records of your members and their memberships, and allows easy communication between you and your members.<br/> 
                    Gym Management system is also feature-packed, helping you in the management and growth of your club.<br/>
                    For Enterprise Gym with Card Attendance (Check-In) + Accounts+POS Visit http://techdynamics.org/gym.php<br/>
                    The objective of the Gym Management System is to provide a system which handles the information of the people coming into the gym and maintaining their health. It takes care of all their health information through schedule management.<br/>
                    It even maintains the data of what and all medicines used by the people who join the gym through schedule management. Data will be stored in the database.<br/>
                    Gym Management System allows the user to store the health,schedule and other details, the details of person who is in the gym, gym equipment details etc. <br/>
                    This software package allows storing the details of all the data related to gymnasium. The system is strong enough to withstand regressive yearly operations under conditions where the database is maintained and cleared over a certain time of span.<br/> 
                    The implementation of the system in the organization will considerably reduce data entry, time and also provide readily calculated reports.
                </Typography>
            </Box>
        </Box>

        <Box
            sx={{
                backgroundColor: "#EEE",
                marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                display: "block",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            >
            <Box sx={{
                backgroundColor: "#DDD",
                // marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography sx={{ fontWeight: "bold" }}>Shop</Typography>
            </Box>
            <Box sx={{
                backgroundColor: "#DDDDD",
                marginTop: '10px',
                padding: "10px 20px",
                border: "1px solid #ccc",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography>Shop - Append in advanced mode</Typography>
            </Box>
            <Box sx={{ padding: '10px', display: 'block' }}>
                <Typography>
                    Invoice Membership Subscription - CodeCanyon Item for Sale<br/>
                    Live PreviewScreenshots<br/>
                </Typography><br/>
                <Typography>
                    Share<br/>
                    Facebook Google Plus Twitter Pinterest<br/>
                    Add to Favorites<br/>
                    Add to Collection<br/>
                </Typography><br/>
                <Typography>
                    Club/Group Membership Manager<br/>
                    This plugin lets you easily manager your recurring membership fees for your small club, group or organisation.<br/>
                    Create your own membership subscription levels (eg: $5 every week, $10 every 6 months) and then give each member a different subscription. <br/>
                    When the members due date is coming close a reminder will be created. <br/>
                    An invoice is generated for each membership payment, and when the invoice is paid a receipt is generated as well.<br/>
                    Optional Features: Also install the UCM Group Plugin – assign your members to different groups! Another Optional Features: Also install the Newsletter Plugin so you can easily send your club members fancy email newsletters.<br/>
                    Club Membership Subscription Features<br/>
                    Automatic Renewing Subscriptions<br/>
                    Automatic Invoice Emailing<br/>
                    Automatic Invoice Overdue Notices<br/>
                    Import Members via CSV<br/>
                    Search for members based on name, phone or email address<br/>
                    Create as many subscription levels as you like (eg: $5 every week, $10 every 6 months).<br/>
                    Assign members to different subscription levels.<br/>
                    Reminders when members subscriptions are due for renewal.<br/>
                    Generate tax invoices for member subscriptions<br/>
                    Generate receipts once membership invoices are paid<br/>
                    How to install<br/>
                </Typography>
            </Box>
        </Box>

      </Paper>
    </Box>
  );
};

export default Htmldoc;
