import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Homepage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        sx={{
          width: "50%",
          marginLeft: "50%",
          borderRadius: "lg",
          borderWidth: "1px",
          direction: "flex",
          alignContent: "center",
          textAlign: "center",
          margin: "10px 0px 5px 0px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography color="white" variant="h2" gutterBotto sx={{  fontFamily:"Fantasy"}} >
          # INCLUDES
        </Typography>
      </Box>  
      <Box
      
        sx={{
          width: "50%",
          marginLeft: "50%",
          borderRadius: "lg",
          borderWidth: "1px",
          alignContent: "center",
          textAlign: "center",
          margin: "10px 0px 15px 0px",
          position: "relative",
          left: "50%",
          bgcolor: 'background.paper',
          border: "1px solid #e8e8e8",
          transform: "translateX(-50%)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            marginLeft: "30%",
            alignContent: "center",
          }}
          variant="soft-rounded"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
        </Box>
        <Box
        sx={{
          marginTop: "10px",
          backgroundColor: "white",
          width: "50%",
          marginLeft: "50%",
          borderRadius: "lg",
          borderWidth: "1px",
          margin: "10px 0px 5px 0px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >

        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Homepage;
