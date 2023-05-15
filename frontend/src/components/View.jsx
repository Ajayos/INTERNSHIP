import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import Delete from "./Delete";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "./Edit";
import Student from "./Student";
const View = () => {
  const [students, setStudents] = React.useState([]);
  const [pass, setPass] = React.useState([]);
  const [isDe, setIsDe] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    async function GetStudent() {
      var { data } = await axios.get(
        "/students/v1/students"
      );
      setStudents(data);
    }
    GetStudent();
  }, []);

  const handleDeletee = async (name, id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const { data } = await axios.delete(
        `/students/v1/students/${id}`
      );
      alert(data.message);
      window.location.href = "/views";
    }
  };

  const handleDelete = async (name, id, no, grade) => {
    setPass({ name, id, no, grade });
    setIsDe(true);
    
  };
  const handleUpdate = async (name, id, no, grade) => {
    setPass({ name, id, no, grade });
    setIsEdit(true);
  };

  if(isDe) return <Delete option={pass} />
  if(isEdit) return (<Student option={pass} />)
  return (
    <div style={{ padding: "100px" }}>
      <Typography variant="h3"> {"Mark list"}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "brown" }}>Rno</TableCell>
              <TableCell style={{ color: "brown" }}>Name</TableCell>
              <TableCell style={{ color: "brown" }}>Grade</TableCell>
              <TableCell style={{ color: "brown" }}></TableCell>
              <TableCell style={{ color: "brown" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((value, index) => {
              return (
                <TableRow>
                  <TableCell key={index}>{value.no}</TableCell>
                  <TableCell key={index}>{value.name}</TableCell>
                  <TableCell key={index}>{value.grade}</TableCell>
                  <TableCell key={index}>
                    <Button
                      name={value._id}
                      onClick={() => handleUpdate(value.name, value._id, value.no, value.grade)}
                      startIcon={<EditIcon />}
                    >
                      EDIT
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                      variant="outlined"
                      name={value._id}
                      onClick={() => handleDelete(value.name, value._id, value.no, value.grade)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;
