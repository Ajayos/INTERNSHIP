import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClickShowPassword = () => setShow(!show);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const [open, setOpen] = useState(true);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    //if (!email || !password) {
    //  setLoading(false);
    //  return;
    //}

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
        console.log(data)
      //setLoading(false);
      //history.push("/chats");
    } catch (error) {
      setLoading(false);
      console.log(error.message)
    }
  };

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Login to your account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={show ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>

          <br />
          <FormControlLabel
            control={
              <Checkbox onClick={handleClickShowPassword} color="primary" />
            }
            label={show ? "Hide password" : "Show password"}
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
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
