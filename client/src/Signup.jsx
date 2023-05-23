import { useState } from "react";
import axios from "axios";
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

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [name, setName] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const maili = data.get("email");
    const password_ = data.get("password");
    console.log(previewUrl)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3003/pic",
        {
          name,
          pic: previewUrl,
        },
        config
      );
      console.log(data);

      
    } catch (error) {
      setPicLoading(false);
      console.log(error);
    }
  };

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
        {/* {{previewUrl ? console.log(previewUrl) : null}} */}

        <Typography component="h1" variant="h5">
          Create your account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
         
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            id="username"
            autoComplete="current-username"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          

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
              sx={{ marginTop: "16px" }}
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
