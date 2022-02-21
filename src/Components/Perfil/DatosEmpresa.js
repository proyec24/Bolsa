import React from "react";
import Service from "../../service";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import LlenarRedes from "./LlenasRedes";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextareaAutosize, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  paperDatosEmpresa: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    paddingTop: "6rem",
  },
  TitleDatosEmpresa: {
    width: "100%",
    textAlign: "center",
    paddingBottom: "4rem",
  },
  borderDatosEmpresa: {
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    fontSize: "2rem",
    marginBottom: "3rem",
    background: "white",
    width: "100%",
  },

  InputFile: {
    display: "none",
  },
  LabelStyles: {
    "&:hover": {
      backgroundColor: "#305173",
    },
    fontSize: "1.4rem",
    fontWeight: "600",
    color: theme.palette.background.default,
    backgroundColor: "#5d7fa3",
    display: "inline-block",
    transition: "all .5s",
    padding: "15px 40px !important",
    cursor: "pointer",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
    height: "100%",
    marginBottom: "1rem"
  },
  AboutMeEmpresa: {
    minHeight: "5rem",
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
    fontFamily: "'Roboto', sans-serif;"
  },
  submitDatosEmpresa: {
    margin: theme.spacing(3, 0, 2),
    marginTop: "2rem",
    height: "4rem",
  },
  SelectorDatosEmpresa: {
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
  RedesDiv: {
    marginTop: "2rem",
    marginBottom: "2rem",
    fontSize: "1.3rem",
  }, 
  FlexRadio: {
    marginTop: "1rem",
    marginBottom: "1rem"
  }
});

class DatosEmpresa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empresa: {
        nomEmp: "",
        imagen: "",
        pagina: "",
        acerca: "",
        categoria: "",
        tamanio: "",
        telefono: 0,
        codigo_postal: 0,
        direccion: "",
        galeria: [],
        redes: [],
      },
      categorias: [],
      tamanios: [],
      redes: [],
      check: [],
      tieneRedes: null,
    };
    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.convertirBase64 = this.convertirBase64.bind(this);
    this.galeriaBase64 = this.galeriaBase64.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitRedes = this.onSubmitRedes.bind(this);
  }

  onSubmitRedes(redes) {
    this.setState((state) => {
      state.empresa.redes = redes;
      return state;
    });
    console.log(this.state.empresa.redes);
  }

  manejarCambio(evento) {
    const valor = evento.target.value;
    const id = evento.target.id;
    this.setState((state) => {
      state.empresa[id] = valor;
      console.log(state);
      return state;
    });
  }

  async manejarEnvio(evento) {
    evento.preventDefault();
    let dato = await Service.postData("registraEmpresa", this.state.empresa);
    if (dato.status) {
      this.props.history.push("/perfil");
    }
  }

  async convertirBase64(e) {
    if (!/\.(jpg|png)$/i.test(e.target.files[0].name)) {
      e.target.value = null;
      return alert("El archivo a adjuntar no es una imagen");
    }
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    this.setState((state) => {
      state.empresa.imagen = base64;
      return state;
    });
  }

  async galeriaBase64(e) {
    for (let x = 0; x < e.target.files.length; x++) {
      if (!/\.(jpg|png)$/i.test(e.target.files[x].name)) {
        e.target.value = null;
        return alert("Algún archivo a adjuntar no es una imagen");
      }
    }

    const bases64 = [];
    const reader = new FileReader();
    for (let x = 0; x < e.target.files.length; x++) {
      bases64[x] = await new Promise((resolve, reject) => {
        reader.readAsDataURL(e.target.files[x]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
      this.setState((state) => {
        state.empresa.galeria[x] = bases64[x];
        return state;
      });
    }
  }

  componentDidMount() {
    Service.getData("categorias").then((data) => {
      this.setState({
        categorias: data,
      });
    });

    Service.getData("tamanios_empresa").then((data) => {
      this.setState({
        tamanios: data,
      });
    });

    Service.getData("redes_sociales").then((data) => {
      this.setState({
        redes: data,
      });
    });
  }

  onChangeValue(e) {
    this.setState({
      tieneRedes: e.target.value === "tiene",
    });
    console.log(this.state.tieneRedes);
  }

  render() {
    const { classes } = this.props;

    let form;
    if (this.state.tieneRedes) {
      form = <LlenarRedes onSubmitRedes={this.onSubmitRedes} />;
    } else if (this.state.tieneRedes === false) {
      form = null;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Header />
        <div className={classes.paperDatosEmpresa}>
          <h1 className={classes.TitleDatosEmpresa}>Registra tu empresa</h1>
          <form onSubmit={this.manejarEnvio}>
            <TextField
              type="text"
              placeholder="Nombre de la Empresa"
              name="nomEmp"
              id="nomEmp"
              value={this.state.empresa.nomEmp}
              onChange={this.manejarCambio}
              required
              className={classes.borderDatosEmpresa}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
            <h2>Telefono</h2>
            <TextField
              type="number"
              placeholder="Telefono"
              name="telefono"
              id="telefono"
              value={this.state.empresa.telefono}
              onChange={this.manejarCambio}
              required
              className={classes.borderDatosEmpresa}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
            <h2>Código postal</h2>
            <TextField
              type="tel"
              placeholder="Codigo postal"
              name="codigo_postal"
              id="codigo_postal"
              value={this.state.empresa.codigo_postal}
              onChange={this.manejarCambio}
              required
              className={classes.borderDatosEmpresa}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
            <br />
            <TextField
              type="text"
              placeholder="Dirección"
              name="direccion"
              id="direccion"
              value={this.state.empresa.direccion}
              onChange={this.manejarCambio}
              required
              className={classes.borderDatosEmpresa}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
            <br />
            <TextField
              type="text"
              placeholder="Pagina web (opcional)"
              name="pagina"
              id="pagina"
              value={this.state.empresa.pagina}
              onChange={this.manejarCambio}
              className={classes.borderDatosEmpresa}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />

            <h2>Categoria de la empresa</h2>
            <select
              className={classes.SelectorDatosEmpresa}
              value={this.state.empresa.categoria}
              required
              onChange={(e) => {
                this.setState((state) => {
                  state.empresa.categoria = parseInt(e.target.value);
                  state.validationError =
                    e.target.value === ""
                      ? "Debese seleccionar una categoria"
                      : "";
                  return state;
                });
              }}
            >
              <option value="">Selecciona una categoria</option>
              {this.state.categorias.map((ed) => (
                <option value={ed.id_categoria} key={ed.id_categoria}>
                  {" "}
                  {ed.nombre}{" "}
                </option>
              ))}
            </select>

            <h2>Tamaño de la empresa</h2>
            <select
              className={classes.SelectorDatosEmpresa}
              value={this.state.empresa.tamanio}
              required
              onChange={(e) => {
                this.setState((state) => {
                  state.empresa.tamanio = parseInt(e.target.value);
                  state.validationError =
                    e.target.value === "" ? "Debe seleccionar un tamaño" : "";
                  return state;
                });
              }}
            >
              <option value="">¿Cúal es el tamaño de tu empresa?</option>
              {this.state.tamanios.map((ed) => (
                <option value={ed.id_tamanio} key={ed.id_tamanio}>
                  {" "}
                  {ed.nombre}{" "}
                </option>
              ))}
            </select>

            <h2>Redes sociales (opcional)</h2>
            <div className={classes.RedesDiv}>
              <div className={classes.FlexRadio}>
              <input
                type="radio"
                value="tiene"
                name="tipo"
                onChange={this.onChangeValue}
                className={classes.RadioComponent}
              />{" "}
              La empresa tiene redes sociales
              </div>
              <div className={classes.FlexRadio}>
              <input
                type="radio"
                value="noTiene"
                name="tipo"
                onChange={this.onChangeValue}
                className={classes.RadioComponent}
              />{" "}
              La empresa no tiene redes sociales
              </div>
              
              {form}
              
            </div>

            <h2>Acerca de la empresa</h2>
            <TextareaAutosize
              placeholder="Cuentanos sobre tu empresa"
              name="acerca"
              id="acerca"
              rows="10"
              cols="80"
              value={this.state.empresa.acerca}
              onChange={this.manejarCambio}
              className={classes.AboutMeEmpresa}
              required
            />

            <h2>Logo de la empresa</h2>
            <input
              type="file"
              accept="image/png"
              onChange={this.convertirBase64}
              required
              name="input1"
              id="input1"
              className={classes.InputFile}
            />
            <label for="input1" className={classes.LabelStyles}>
              {" "}
              Subir Imágen
            </label>
            <h2>Galeria de fotos (opcional)</h2>
            <input
              type="file"
              accept="image/png"
              onChange={this.galeriaBase64}
              multiple
              name="input2"
              id="input2"
              className={classes.InputFile}
            />
            <label for="input2" className={classes.LabelStyles}>
              {" "}
              Subir Imágen
            </label>

            <Button
              type="submit"
              id="submit"
              value="Crear cuenta de empresa"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitDatosEmpresa}
            >
              Registra tu empresa
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default withRouter(withStyles(useStyles)(DatosEmpresa));
