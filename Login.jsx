import React from 'react'
//import axios from 'axios'
import { Container, TextField, Button, Box } from '@mui/material'
function Login() {
    var [username, setUserName] = React.useState("");
    var [password, setPassword] = React.useState("");
    
  return (
    <Container maxWidth="sm">
      <Box container display="flex" justifyContent="space-between">
         <h1>Login</h1>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Box>
    </Container>
  )
}

export default Login