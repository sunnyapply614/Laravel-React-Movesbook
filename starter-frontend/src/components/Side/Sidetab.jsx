import React from "react";
import { Button } from '@mui/material';

function Sidetab() {
    return (
      <div>
        {/* <Button
          sx={{ position: 'fixed', top: '30%', pl: '0px', ml: '0px' }}
        > */}
        <a href="#" target="_blank">
          <img style={{position: 'fixed', top: '30%'}} src="assets/img/dashboard/movebooks-info.png" />
        </a>
        {/* </Button> */}
      </div>
    );
  }
  
  export default Sidetab;