import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Delete = ({ option }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    window.location.href = "/views";
  };

  const handleDelete = async (id) => {
    await axios.delete(`/students/v1/students/${id}`);
    window.location.href = "/views";
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you Want to delete ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Rno {option.no}
            <br />
            Name {option.name}
            <br />
            Grade {option.grade}
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(option.id)}
            autoFocus
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Delete;
