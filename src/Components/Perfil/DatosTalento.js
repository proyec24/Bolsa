import React from "react";
import Service from "../../service";
import SingleFileUploader from "../FileUploader";
import FileUploader from "../MultipleFileUploader";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextareaAutosize, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  paperDatosTalento: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    paddingTop: "6rem",
  },
  MarginTextDatosTalento: {
    marginBottom: "3rem",
  },
  formDatosTalento: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  borderDatosTalento: {
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    fontSize: "2rem",
    marginBottom: "3rem",
    background: "white",
    width: "100%",
  },
  submitDatosTalento: {
    margin: theme.spacing(3, 0, 2),
    marginTop: "2rem"
  },
  SelectorDatosTalento: {
    padding: "0.6rem",
    border: "none",
    margin: "1rem",
    fontSize: "1.2rem",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    width: "100%",
    marginLeft: "0",
    marginTop: "0",
    marginBottom: "3rem",
    height: "5.4rem",
    padding: "1.2rem",
  },
  AboutMe: {
    minHeight: "10rem",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    fontSize: "2rem",
    marginBottom: "3rem",
    background: "white",
    width: "100%",
    resize: "none",
    border: "none",
    padding: "0.6rem",
    fontSize: "1.4rem",
    padding: "1.2rem",
  },
  ButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
  },
  TitleDatosTalento: {
    width: "100%",
    textAlign: "center",
    paddingBottom: "4rem"
  }
});

class DatosTalento extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: {
        user: "",
        userP: "",
        userM: "",
        educacion: 0,
        imagen: "",
        puesto: 0,
        experiencia: "",
        municipio: 0,
        aboutMe: "",
        direccion: "",
        telefono: "",
        codigoPostal: "",
        diplomas: [],
      },
      educaciones: [],
      municipios: [],
      puestos: [],
      edValidationError: "",
      puValidationError: "",
      munValidationError: "",
      userAvailable: "",
      mailAvailable: "",
    };

    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
    this.onSubmitFiles = this.onSubmitFiles.bind(this);
    this.onSubmitFile = this.onSubmitFile.bind(this);
  }

  async componentDidMount() {
    const educaciones_ = await Service.getData("educaciones");
    const municipios_ = await Service.getData("municipios");
    const puestos_ = await Service.getData("puestos");
    this.setState({
      educaciones: educaciones_,
      municipios: municipios_,
      puestos: puestos_,
    });
  }

  manejarEnvio(e) {
    e.preventDefault();
    console.log(this.state.usuario);
    // Service.postData("registraTalento", this.state.usuario)
    //   .then(data => {
    //     if (data.status) {
    //       this.props.history.push('/perfil');
    //     }
    //   });
  }

  manejarCambio(e) {
    const id = e.target.id;
    let valor = e.target.value;

    this.setState((state) => {
      state.usuario[id] = valor;
      return state;
    });
  }

  onSubmitFiles(bases) {
    this.setState((state) => {
      state.usuario.diplomas = bases;
      return state;
    });
  }

  onSubmitFile(base) {
    this.setState((state) => {
      state.usuario.imagen = base;
      return state;
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Header />
        <div className={classes.paperDatosTalento}>
          <h1 className={classes.TitleDatosTalento}>Estás a un paso de completar tu perfil</h1>
          <form
            onSubmit={this.manejarEnvio}
            className={classes.formDatosTalento}
          >
            <TextField
              type="text"
              placeholder="Ingresa tu Nombre"
              name="user"
              id="user"
              value={this.state.usuario.user}
              onChange={this.manejarCambio}
              required
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Nombre"
              fullWidth
              autoFocus
            />
            <TextField
              type="text"
              placeholder="Ingresa tu Apellido Paterno"
              name="userP"
              id="userP"
              onChange={this.manejarCambio}
              value={this.state.usuario.userP}
              required
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Apellido Paterno"
              fullWidth
              autoFocus
            />
            <TextField
              type="text"
              placeholder="Ingresa tu Apellido Materno"
              name="userM"
              id="userM"
              onChange={this.manejarCambio}
              value={this.state.usuario.userM}
              required
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Apellido Materno"
              fullWidth
              autoFocus
            />
            <select
              className={classes.SelectorDatosTalento}
              value={this.state.usuario.educacion}
              required
              onChange={(e) => {
                this.setState((state) => {
                  state.usuario.educacion = parseInt(e.target.value);
                  state.edValidationError =
                    e.target.value === "" ? "Debes seleccionar un nivel" : "";
                  return state;
                });
              }}
            >
              <option value="">Selecciona tu nivel de educacion</option>
              {this.state.educaciones.map((ed) => (
                <option value={ed.id_educacion} key={ed.id_educacion}>
                  {" "}
                  {ed.nivel}{" "}
                </option>
              ))}
            </select>
            <select
              className={classes.SelectorDatosTalento}
              value={this.state.usuario.puesto}
              required
              onChange={(e) => {
                this.setState((state) => {
                  state.usuario.puesto = parseInt(e.target.value);
                  state.puValidationError =
                    e.target.value === "" ? "Debes seleccionar un puesto" : "";
                  return state;
                });
              }}
            >
              <option value="">Selecciona tu puesto</option>
              {this.state.puestos.map((ed) => (
                <option value={ed.id_puesto} key={ed.id_puesto}>
                  {" "}
                  {ed.nombre}{" "}
                </option>
              ))}
            </select>
            <select
              className={classes.SelectorDatosTalento}
              value={this.state.usuario.municipio}
              required
              onChange={(e) => {
                this.setState((state) => {
                  state.usuario.municipio = parseInt(e.target.value);
                  state.munValidationError =
                    e.target.value === ""
                      ? "Debes seleccionar un municipio"
                      : "";
                  return state;
                });
              }}
            >
              <option value="">Selecciona tu municipio</option>
              {this.state.municipios.map((ed) => (
                <option value={ed.id_municipio} key={ed.id_municipio}>
                  {" "}
                  {ed.nombre}{" "}
                </option>
              ))}
            </select>
            <TextareaAutosize
              type="text"
              placeholder="Acerca de mi"
              name="aboutMe"
              id="aboutMe"
              variant="outlined"
              className={classes.AboutMe}
              value={this.state.usuario.aboutMe}
              onChange={this.manejarCambio}
            />
            <TextField
              type="text"
              placeholder="Direccion"
              name="direccion"
              id="direccion"
              value={this.state.usuario.direccion}
              onChange={this.manejarCambio}
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Dirección"
              fullWidth
              autoFocus
            />
            <TextField
              type="number"
              placeholder="Codigo postal"
              name="codigoPostal"
              id="codigoPostal"
              value={this.state.usuario.codigoPostal}
              onChange={this.manejarCambio}
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Código Postal"
              fullWidth
              autoFocus
            />
            <TextField
              type="number"
              placeholder="Telefono"
              name="telefono"
              id="telefono"
              value={this.state.usuario.telefono}
              onChange={this.manejarCambio}
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Teléfono"
              fullWidth
              autoFocus
            />
            <TextField
              type="number"
              placeholder="Años de experiencia"
              name="experiencia"
              id="experiencia"
              value={this.state.usuario.experiencia}
              onChange={this.manejarCambio}
              className={classes.borderDatosTalento}
              variant="outlined"
              margin="normal"
              label="Años de experiencia"
              fullWidth
              autoFocus
            />
            <div className={classes.ButtonContainer}>
              <FileUploader
                onSubmitFiles={this.onSubmitFiles}
              />
              <SingleFileUploader
                onSubmitFile={this.onSubmitFile}
              />
            </div>

            <div style={{ color: "red", marginTop: "5px" }}>
              {" "}
              {this.state.puValidationError}{" "}
            </div>
            <div style={{ color: "red", marginTop: "5px" }}>
              {" "}
              {this.state.edValidationError}{" "}
            </div>
            <div style={{ color: "red", marginTop: "5px" }}>
              {" "}
              {this.state.munValidationError}{" "}
            </div>

            <Button
              type="submit"
              id="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitDatosTalento}
            >
              Completa tu perfil
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(withStyles(useStyles)(DatosTalento));
