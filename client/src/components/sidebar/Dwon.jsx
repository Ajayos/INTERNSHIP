import { Box, Button, Icon, IconButton } from '@mui/material'
import React from 'react'
import { AiFillHome } from "react-icons/ai";

const Dwon = () => {
  return (
    <Box sx={{
        width: 50,
        backgroundColor: 'yellow',
        height: '100vh',
        }}
        >
            <Button icon={<AiFillHome />} />
    </Box>
  )
}

export default Dwon