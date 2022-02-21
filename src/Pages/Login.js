/* global gapi */
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Service from "../service";
import Header from "../Components/Header/Header";
import { withRouter } from 'react-router-dom'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    paddingTop: "6rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  MarginText: {
    marginBottom: "3rem",
  },
  Google: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "3rem",
    marginTop: "4rem"
  },
  Border: {
    fontSize: "2rem"
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CNI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        pass: "",
      },
      loginState: "",
    };

    this.tryLogin = this.tryLogin.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  tryLogin(e) {
    e.preventDefault();
    Service.postData("logea", this.state.user).then((data) => {
      this.updateLoginStatus(data);
    });
  }

  updateLoginStatus(data) {
    let stateMsg;

    if (data.status === "correct") {
      this.props.acceder(true);
      stateMsg = "correct";
      this.props.history.push('/perfil')
    } else if (data.status === "incorrect") {
      this.props.acceder(false);
      stateMsg = "Credenciales incorrectas"
    } else if (data.status === 'first-login') {
      this.props.acceder(true);
      stateMsg = "";
    } else {
      this.props.acceder(false);
      stateMsg = "Usuario no encontrado";
    }

    this.setState({
      loginState: stateMsg,
    });

    sessionStorage.setItem("login", data.status === "correct")
  }

  manejarCambio(e) {
    const id = e.target.id;
    const value = e.target.value;
    this.setState((state) => {
      state.user[id] = value;
      return state;
    });
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const data = {
      token: googleUser.getAuthResponse().id_token,
    }
    Service.postData('googleLogea', data)
      .then(res => {
        this.updateLoginStatus(res);
      });
  }

  componentDidMount() {
    gapi.signin2.render("g-signin2", {
      scope: "https://www.googleapis.com/auth/plus.login",
      width: 200,
      height: 50,
      onsuccess: this.onSignIn,
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Header />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            className={classes.MarginText}
            component="h1"
            variant="h5"
          >
            Inicio de sesión
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.tryLogin}>
            <TextField
              id="userName"
              placeholder="Ingresa tu nombre de usuario"
              className={classes.border}
              variant="outlined"
              margin="normal"
              required
              label="nombre de usuario"
              fullWidth
              autoFocus
              onChange={this.manejarCambio}
              value={this.state.user.userName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              placeholder="Ingresa tu contraseña"
              required
              fullWidth
              label="Password"
              type="password"
              id="pass"
              onChange={this.manejarCambio}
              value={this.state.user.pass}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sesion
            </Button>
            <div className={classes.Google}>
              <div> {this.state.loginState} </div>
              <div id="g-signin2"></div>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withRouter(withStyles(useStyles)(Login))
