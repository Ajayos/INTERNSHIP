import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Typography,
  Avatar,
  Box,
  Grid,
  Paper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Edit = ({ option }) => {
  var [Student, setStudent] = React.useState({ name: "", no: "", grade: "" });
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    window.location.href = "/views";
  };
  useEffect(() => {
    setStudent({ name: option.name, no: option.no, grade: option.grade });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    var name = Student["name"];
    await axios.put(`/students/v1/students/${option.id}`, {
      name: name,
      no: Student["no"],
      grade: Student["grade"],
    });
    window.location.href = "/views";
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...Student, [name]: value });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
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
                      id="name"
                      label="name"
                      value={Student["name"]}
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
                      value={Student["grade"]}
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
                      UPDATE
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Edit;
