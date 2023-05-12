import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
const View = () => {
  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    async function GetStudent() {
      var { data } = await axios.get("http://localhost:8080/view");
      setStudents(data);
    }
    GetStudent();
  }, []);

  
  const handleDelete = async(name, id) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${name}?`
      )
    ) {
      const { data } = await axios.delete(`http://localhost:8080/delete/${id}`);
      alert(data.message);
      
    }
  };
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
                    <Button>EDIT</Button>
                  </TableCell>
                  <TableCell key={index}>
                    <Button
                      name={value._id}
                      onClick={() => handleDelete(value.name, value._id)}
                    >
                      DELETE
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
