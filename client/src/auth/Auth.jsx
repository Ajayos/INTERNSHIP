import {
  Avatar,
  Container,
  Typography,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Alert,
} from "@mui/material";
import React from "react";
import axios from "axios"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Auth = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState({ su: false, email: false, noin: false, fail: false });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleCloses = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {return;}
    
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const maili = data.get("email");
    const password = data.get("password");
    if(maili && password) {
      if(maili.includes('@')) {
        await axios.post('http://localhost:3001/login',{
          email: data.get("email"),
          password: data.get("password"),
        }).then((data) => {
          console.log(data);
        }).catch((error) => {
          console.error(error);
        })
      } else {
        return <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}> Enter valid email</Alert>
      }
    } else {
      return 
    }
    
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            marginLeft={40}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1" variant="h5">
                Login to your account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                ></TextField>

                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleClickShowPassword}
                      color="primary"
                    />
                  }
                  label={showPassword ? "Hide password" : "Show password"}
                />
                <br />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? "} <Link href="/register" underline="none"> {'Sign Up'}</Link>
                    </Link>
                  </Grid>
                </Grid>
                <Snackbar id="su"  name="su" open={true} autoHideDuration={6000} onClose={handleClose}> <Alert id="su"  name="su" onClose={handleClose} severity="success" sx={{ width: '100%' }}> This is a success message! </Alert> </Snackbar>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  This is a success message!
                  </Alert>
                </Snackbar>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Auth;
