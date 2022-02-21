import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    logo: {
        width: "20vw",
        [[theme.breakpoints.up('sm')]]: {
            width: "8rem",
        }
    }
}));

var logo_img = "https://growthyinvestors.com/wp-content/uploads/2021/05/cropped-TemplatesWEBHome_Mesa-de-trabajo-1-copia-10-1.png"

export default function Logo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Route>
            <Link  component={RouterLink} className={classes.links} to="/" >
                <img className={classes.logo} src={logo_img} alt="Logo Growthy" />
            </Link>
        </Route>
        </div>
    );
}
