import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, CardHeader, CssBaseline, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(5, 17, 59)', // Replace with your desired background color
    minHeight: '100vh',
  },
}));

const AuthControl = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [user]);

  if (user) {
    return (window.location.href = "/Dashboard");
  } else {
    return (
      <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)'}}>
                        <Grid item sx={{ m: { xs: 5, sm: 3 }, mb: 0,  }} >
                        <Card  sx={{ maxWidth: { xs: 400, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}>
         <CardHeader sx={{ maxWidth: { xs: 400, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }} title={"title"}  />
        <CardHeader title={<Typography variant="h3">{"title"}</Typography>}  />
        <Divider />
       <CardContent  >hi</CardContent>
      </Card>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
    </div>
    );
  }
};

export default AuthControl;


/**
 *  <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ backgroundColor: "red" }}>
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                          hehehehsdgv
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        gutterBottom
                                                        variant='h2'
                                                    >
                                                        {'hi'}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign='center'
                                                    >
                                                        Enter your credentials to continue
                                                    </Typography> 
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography component={Link} to="#" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                {'auth.not_account'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
 */