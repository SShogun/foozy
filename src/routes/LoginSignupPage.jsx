// Material UI imports
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';

// Import React
import * as React from 'react';
import { useState } from 'react';

// Import components
import Login from '../components/Login';
import Signup from '../components/Signup';

export default function LoginSignupPage() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='flex justify-center py-10'>
            <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px", width: "400px", height: "400px"}}>
        <div align="center">
          {checked ? (
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="info"
            />
          )}
          <br />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        {checked ? <Login /> : <Signup />}
      </Paper>

        </div>
    )
}