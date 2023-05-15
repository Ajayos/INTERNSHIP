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
        <Box container justifyContent="center" marginTop="100px">
          <Typography align="center" sx={{ flexGrow: 1 }}>
            {"Dashboard"}
          </Typography>
        </Box>
        <Box  justifyContent="center" marginTop="100px">
           <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "100%",
            height: "50%"
          },
        }}
      >
           
                      {data.map((value, index) => {
                        return (
                          <Paper elevation={0} >
                          <Card
                            sx={{
                              
                              backgroundColor: "#e0e0e0",
                            }}
                            key={index}
                          >
                            <CardContent>
                            <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                              ></Typography>
                              <Typography variant="body2">
                                {value.userId}
                              </Typography><br />
                              <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                              >
                                {value.title}
                              </Typography>
                              <Typography variant="h5" component="div">
                                {value.body}
                              </Typography>
                             
                            </CardContent>
                            
                          </Card>
                          </Paper>
                        );
                      })}
  
          </Box>
        </Box>
      </>
    );
  };
  
  export default Dashboard;
  