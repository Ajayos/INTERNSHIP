import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const AddCard = () => {
  // add cards have 3 inputs and a submit button and clear button that are in center position

  var [Blogs, setBlogs] = useState({ name: "", description: "", author: "" });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setBlogs({ ...Blogs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var name = Blogs["name"];
    var exp = {
      name: name,
      description: Blogs["description"],
      author: Blogs["author"],
    };
    console.log(exp);
    alert(`Blog Added Successfully`);
    window.location.href = "/";
  };
  return (
    <Box display="flex" justifyContent="center" marginTop="100px">
      <Box p={2} width={"100%"} height={"100%"} borderRadius={4}>
        <Container component="main" maxWidth="lg">
          <Box>
            <Grid container>
              <Grid item xs={12} component={Paper} elevation={6} square>
                <br />
                <br />
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
                    {"ADD A BLOG"}
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
                      id="name"
                      label="Blog Name"
                      name="name"
                      autoComplete="name"
                      onChange={handleOnchange}
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="description"
                      label="Description"
                      type="text"
                      id="description"
                      autoComplete="current-description"
                      onChange={handleOnchange}
                    ></TextField>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="author"
                      label="Author"
                      type="text"
                      id="author"
                      autoComplete="current-author"
                      onChange={handleOnchange}
                    ></TextField>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleSubmit}
                    >
                      ADD
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AddCard;
