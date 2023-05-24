import React, { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Dashboard from "./Components/Dashboard";
import AddCard from "./Components/AddCard";
function App() {
  var [isw, setIsw] = useState(false);

  const changeHome = function () {
    setIsw(false);
  };
  const changeAdd = function () {
    setIsw(true);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography align="left" sx={{ flexGrow: 1 }}>
            {"Dashboard"}
          </Typography>
          <Button onClick={changeHome}>
            <Typography color={"white"}> {" HOME "}</Typography>
          </Button>
          <Button onClick={changeAdd}>
            <Typography color={"white"}> {" ADD BLOGE"} </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      {isw ? <AddCard /> : <Dashboard />}
    </div>
  );
}

export default App;
