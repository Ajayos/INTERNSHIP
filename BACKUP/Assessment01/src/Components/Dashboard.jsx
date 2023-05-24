import {
  AppBar,
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  Card,
  CardActions,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  // Create a new Dashboard
  // on center of top print dash board and then a box it have so many cards to show
  // each card have a title and description and author name
  // on click of card it will open a new page and show the details of that card
  var [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Dashboard";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <Typography align="center" variant="h4">
        {" "}
        Blog{" "}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Id</TableCell>
            <TableCell> Title </TableCell>
            <TableCell> Description </TableCell>
          </TableRow>
        </TableHead>
        {data.map((value, index) => {
          return (
            <TableRow>
              <TableCell> {value.id} </TableCell>
              <TableCell> {value.title}</TableCell>
              <TableCell> {value.body}</TableCell>
            </TableRow>
          );
        })}

        <TableBody></TableBody>
        <Button></Button>
      </Table>
    </>
  );
};

export default Dashboard;
