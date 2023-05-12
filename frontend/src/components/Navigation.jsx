import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography align="left" sx={{ flexGrow: 1 }}>
            STUDENT
          </Typography>
          <Button>
            <Link to={"/student"} style={{ color: "white" }}>
              {" "}
              DATA
            </Link>
          </Button>
          <Button>
            <Link to={"/view"} style={{ color: "white" }}>
              {" "}
              View{" "}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
