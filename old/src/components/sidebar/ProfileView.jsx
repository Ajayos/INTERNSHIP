import { Avatar, Backdrop, Box, Button, CircularProgress, ImageList } from '@mui/material'
import React from 'react'

const ProfileView = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
  return (
    
    <Box
        >
            <Button
                onClick={handleOpen}
                sx={{
                    width: 50,
                    height: 50,
                    marginTop: 2,
                    marginLeft: -1,
                    marginBottom: 2,
                }}
            >
                <Avatar
                    alt="Ajay o s" 
                    src="https://github.com/Ajayos.png"
                    />
            </Button>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={open}
                onClick={handleClose}
            >
                 {/** its a comment */}
                <img  src={`https://github.com/Ajayos.png`} loading="lazy" />
            </Backdrop>
            
        </Box>
  )
}

export default ProfileView