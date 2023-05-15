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
import React, { useEffect, useState } from "react";
import axios from "axios";
const Student = ({option}) => {
  var [Student, setStudent] = useState({ name: "", no: "", grade: "" });
  var [isEdit, setIsEdit] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...Student, [name]: value });
  };
  useEffect(() => {
    if(option) {
      setStudent({ name: option.name, no: option.no, grade: option.grade });
      setIsEdit(true);
    }
  }, [option]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    var name = Student['name'];
    if(option) {
      await axios.put(`/students/v1/students/${option.id}`,
      {
        name: name,
        no: Student['no'],
        grade: Student["grade"],
      });
    } else {
      await axios.post("/students/v1/students",
      {
        name: name,
        no: Student['no'],
        grade: Student["grade"],
      });
    }
    window.location.href = "/views";
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
                { isEdit ? 'EDIT DATA' :  'ADD DATA'}
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
                  value={Student["no"]}
                  name="no"
                  autoComplete="no"
                  onChange={handleOnchange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={Student["name"]}
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
                  value={Student["grade"]}
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
                  { isEdit ? 'UPDATE' :  'ADD'}
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
