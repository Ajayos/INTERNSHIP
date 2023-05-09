import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import { Avatar, Backdrop, Box, Button, } from '@mui/material';
import ProfileView from './ProfileView';
import Dwon from './Dwon';

const Side = () => {
  return (
    {/* <Container in left side*/},
    <Grid container >
        <Box
          sx={{
            width: 50,
            backgroundColor: 'black',
            height: '100vh',
          }}
        >
            <ProfileView />
            <Dwon />
        </Box>
        
    </Grid>
  )
}

export default Side