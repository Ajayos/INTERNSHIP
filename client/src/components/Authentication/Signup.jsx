import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
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
import CameraAltIcon from '@mui/icons-material/CameraAlt';



const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const maili = data.get("email");
    const password = data.get("password");
    if (maili && password) {
      if (maili.includes("@")) {
        await axios
          .post("/login", {
            email: data.get("email"),
            password: data.get("password"),
          })
          .then((data) => {
            console.log(data);
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };


  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    // Handle the file upload logic here
    console.log(file);
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
        {previewUrl ? (
          <Avatar sx={{ bgcolor: "secondary.main" }} src={previewUrl}></Avatar>
        ) : (
          <Avatar sx={{ bgcolor: "secondary.main" }}></Avatar>
        )}

        <Typography component="h1" variant="h5">
          Create your account
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
            autoFocus
          />
          <br />
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            id="username"
            autoComplete="current-username"
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={show ? "text" : "password"}
            id="password"
            autoComplete="current-password"
          ></TextField>
          <br />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={show ? "text" : "password"}
            id="confirmPassword"
          ></TextField>

          <br />
          <FormControlLabel
            control={<Checkbox onClick={handleClick} color="primary" />}
            label={show ? "Hide password" : "Show password"}
          />
          <br />
          {!previewUrl ? (
            <label htmlFor="image-upload">
              <Button color="secondary" variant="contained" component="span">
                Select Image
              </Button>
            </label>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleUploadClick}
              disabled={!file}
              sx={{ marginTop: "16px",  }}
            >
              Upload Image
            </Button>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Sign UP
          </Button>
          
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default Signup;
