import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
const Student = () => {
  var [Student, setStudent] = useState({ name: "", no: "", grade: "" });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...Student, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    var name = Student['name'];
    await axios.post("http://localhost:8080/add", {
      name: name,
      no: Student['no'],
      grade: Student["grade"],
    });
    window.location.href = "/view";
  };

  return (
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
                Add data
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
                  id="no"
                  label="Rollno"
                  name="no"
                  autoComplete="no"
                  onChange={handleOnchange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  onChange={handleOnchange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="grade"
                  label="Grade"
                  type="text"
                  id="grade"
                  autoComplete="current-grade"
                  onChange={handleOnchange}
                ></TextField>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Student;
