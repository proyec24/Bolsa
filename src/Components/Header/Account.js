import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import Login from "../../Pages/Login";
import Service from "../../service";

const useStyles = makeStyles((theme) => ({
  accountMobile: {
    [[theme.breakpoints.up('sm')]]: {
      display: "none"
    }
  },
  accountDesktop: {
    [[theme.breakpoints.down('xs')]]: {
      display: "none"
    }
  },
  accountProfileIcon: {
    fontSize: "3rem",
    color: theme.palette.primary.dark
  },
  accountButtonGrup: {
    background: theme.palette.background.default,
    padding: ".5rem",
    [[theme.breakpoints.up('sm')]]: {
      background: "transparent",
    }
  },
  accounButtonLink: {
    marginRight: ".5rem",
    "&:hover": {
      textDecoration: "none",
    }
  },
  accountButtonPopover: {
    textTransform: "capitalize",
    fontWeight: "500",
    margin: ".5rem .0rem",
    width: "100%",
  },
  accountList: {
    background: theme.palette.background.default,
  },
  accountListUser: {
    background: theme.palette.background.default,
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  // login: {
  //     display: "none"
  // }
}));

export default function Account() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState(sessionStorage.getItem("login"));


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const state = () => {
    setStatus(true)
  }

  const logOut = () => {
    sessionStorage.clear()
    Service.getData("logout")
      .then(() => {

      })
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {
        status ?
          <div className={classes.login} state={state}>
            <IconButton aria-describedby={id} color="primary" onClick={handleClick} >
              <Avatar alt="User" src="https://growthyinvestors.com/wp-content/uploads/2021/07/user.jpg" />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <List className={classes.accountList}>
                <ListItem className={classes.accountListUser}>
                  <SettingsIcon color="secondary" fontSize="large" />
                  <Link href="#" className={classes.accounButtonLink}>
                    <Typography variant="h5" color="secondary">Cuenta</Typography>
                  </Link>
                </ListItem>
                <ListItem className={classes.accountListUser}>
                  <DashboardIcon color="secondary" fontSize="large" />
                  <Link href="#" className={classes.accounButtonLink}>
                    <Typography variant="h5" color="secondary">Dashboard</Typography>
                  </Link>
                </ListItem>
                <Divider />
                <Divider />
                <ListItem className={classes.accountListUser}>
                  <ExitToAppIcon color="secondary" fontSize="large" />
                  <Link href="/" onClick={logOut} className={classes.accounButtonLink}>
                    <Typography variant="h5" color="secondary">Cerrar Sesión</Typography>
                  </Link>
                </ListItem>
              </List>
            </Popover>
          </div>
          :
          <div className={classes.loginOut}>
            <div className={classes.accountMobile}>
              <IconButton aria-describedby={id} color="primary" onClick={handleClick} >
                <PersonIcon className={classes.accountProfileIcon} />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Route>
                  <ButtonGroup orientation="vertical" className={classes.accountButtonGrup} color="primary" aria-label="outlined primary button group">
                    <Link component={RouterLink} to="/iniciar-sesion">
                      <Button variant="contained" color="secondary" className={classes.accountButtonPopover}>Inicia Sesión</Button>
                    </Link>
                    <Link component={RouterLink} to="/registro">
                      <Button variant="contained" color="primary" className={classes.accountButtonPopover}>Regístrate</Button>
                    </Link>
                  </ButtonGroup>
                </Route>
              </Popover>
            </div>
            <div className={classes.accountDesktop}>
              <Route>
                <ButtonGroup className={classes.accountButtonGrup} color="primary" aria-label="outlined primary button group">
                  <Link component={RouterLink} className={classes.accounButtonLink} to="/iniciar-sesion">
                    <Button variant="contained" color="secondary" className={classes.accountButtonPopover}>Inicia Sesión</Button>
                  </Link>
                  <Link component={RouterLink} className={classes.accounButtonLink} to="/registro">
                    <Button variant="contained" color="primary" className={classes.accountButtonPopover}>Regístrate</Button>
                  </Link>
                </ButtonGroup>
              </Route>
            </div>
          </div>
      }
    </div>
  );
}
