import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    TeamContainer: {
        height: "40%",
        paddingBottom: "10%",
    },
    TeamImage: {
        height: "100%",
        width: "100%",
        padding: "1.5rem",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundSize: "cover",
        [theme.breakpoints.up('md')]: {
            padding: "10%",
            paddingTop: "0",
            paddingBottom: "0"
        }
    }
}));

export default function Teambanner() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
          {/*Container Fluid*/}
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false">
              <div className={classes.TeamContainer}>
                <img className={classes.TeamImage} src="https://growthyinvestors.com/wp-content/uploads/2021/07/Recurso-1.png"/>
              </div>
            </Container>
          </React.Fragment>
          {/*Container Fluid*/}
        </div>
    );
  }
  