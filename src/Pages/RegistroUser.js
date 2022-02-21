import React from "react";
import Service from "../service";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../Components/Header/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = (theme) => ({
 
  paperRegistroUser: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    paddingTop: "6rem",
  },
  MarginTextRegistroUser: {
    marginBottom: "3rem",
  },
  formRegistroUser: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  borderRegistroUser: {
    fontSize: "2rem",
  },
  submitRegistroUser: {
    margin: theme.spacing(3, 0, 2)
  },
  iconRegistroUser: {
    fontSize: "4rem",
    margin: theme.spacing(1),
    color: theme.palette.secondary.main
  }
});

class Registro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: {
        userName: "",
        correo: "",
        pass: "",
      },
      userAvailable: "",
      mailAvailable: "",
    };

    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
    this.verficarDisponibilidad = this.verficarDisponibilidad.bind(this);
  }

  componentDidMount() {
    Service.getData("educaciones").then((data) => {
      this.setState({
        educaciones: data,
      });
    });
  }

  manejarEnvio(e) {
    e.preventDefault();

    Service.postData("registra", this.state.usuario).then((data) => {
      if (data.status) {
        this.props.history.push("/login");
      }
    });
  }

  manejarCambio(e) {
    const id = e.target.id;
    let valor = e.target.value;

    this.setState((state) => {
      state.usuario[id] = valor;
      return state;
    });
  }

  verficarDisponibilidad(e) {
    const values = {
      user: this.state.usuario.userName,
      mail: this.state.usuario.correo,
    };

    Service.postData("check_available", values).then((data) => {
      console.log(data);
      this.setState((state) => {
        if (!data.estadoUser) state.userAvailable = "Usuario ya registrado";
        else state.userAvailable = "";

        if (!data.estadoMail) state.mailAvailable = "Correo ya registrado";
        else state.mailAvailable = "";

        return state;
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Header />
        <div className={classes.paperRegistroUser}>
          
            <AccountCircleIcon className={classes.iconRegistroUser}/>
          
          <Typography
            className={classes.MarginTextRegistroUser}
            component="h1"
            variant="h5"
          >
            Registro Usuario
          </Typography>
          <form
            className={classes.formRegistroUser}
            onSubmit={this.manejarEnvio}
          >
            <TextField
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="userName"
              id="userName"
              onChange={this.manejarCambio}
              value={this.state.usuario.userName}
              onBlur={this.verficarDisponibilidad}
              required
              className={classes.borderRegistroUser}
              variant="outlined"
              margin="normal"
              label="nombre de usuario"
              fullWidth
              autoFocus
            />
            <span id="userStatus">{this.state.userAvailable}</span>
            <TextField
              type="mail"
              placeholder="Ingresa tu correo electrónico"
              name="correo"
              id="correo"
              onChange={this.manejarCambio}
              value={this.state.usuario.correo}
              onBlur={this.verficarDisponibilidad}
              required
              className={classes.borderRegistroUser}
              variant="outlined"
              margin="normal"
              label="Correo electrónico"
              fullWidth
              autoFocus
            />
            <span id="mailStatus">{this.state.mailAvailable}</span>
            <TextField
              type="password"
              placeholder="Ingresa tu contraseña"
              name="pass"
              id="pass"
              onChange={this.manejarCambio}
              value={this.state.usuario.pass}
              required
              className={classes.borderRegistroUser}
              variant="outlined"
              margin="normal"
              label="Contraseña"
              fullWidth
              autoFocus
            />
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitRegistroUser}
          >
            Registrarse
          </Button>
        </div>
      </Container>
    );
  }
}

export default withRouter(withStyles(useStyles)(Registro));
