import React from "react";
import Service from "../service";
import { withRouter } from 'react-router-dom'

const useStyles = (theme) => ({
  ButtonRegistro: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Registro extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      usuario: {
        userName: "",
        correo: "",
        pass: "",
        //-------------------------------------
        user: "",
        userP: "",
        userM: "",
        educacion: 0,
        imagen: "",
      },
      educaciones: [],
      validationError: "",
      userAvailable: "",
      mailAvailable: "",
    };

    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.manejarCambio = this.manejarCambio.bind(this);
    this.verficarDisponibilidad = this.verficarDisponibilidad.bind(this);
    this.convertirBase64 = this.convertirBase64.bind(this);
  }

  componentDidMount() {
    Service.getData("educaciones").then(data => {
      this.setState({
        educaciones: data
      })
    })
  }

  manejarEnvio(e) {
    e.preventDefault();

    Service.postData("registra", this.state.usuario)
      .then(data => {
        if (data.status) {
          console.log('yeah boi');
          this.props.history.push('/login');
        }
      });
  }

  manejarCambio(e) {
    const id = e.target.id;
    let valor = e.target.value;

    this.setState(state => {
      state.usuario[id] = valor;
      return state;
    })
  }

  verficarDisponibilidad(e) {
    const values = {
      user: this.state.usuario.userName,
      mail: this.state.usuario.correo,
    }

    Service.postData("check_available", values)
      .then(data => {
        console.log(data);
        this.setState(state => {
          if (!data.estadoUser)
            state.userAvailable = "Usuario ya registrado";
          else
            state.userAvailable = "";

          if (!data.estadoMail)
            state.mailAvailable = "Correo ya registrado";
          else
            state.mailAvailable = "";

          return state;
        })
      })

  }

  async convertirBase64(e) {
    if (!(/\.(jpg|png)$/i).test(e.target.files[0].name)) {
      e.target.value = null;
      return alert('El archivo a adjuntar no es una imagen');
    }
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    this.setState(state => {
      state.usuario.imagen = base64;
      console.log(state.usuario.imagen)
      return state;
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.manejarEnvio}>
          <input type="text" placeholder="Nombre" name="user" id="user"
            value={this.state.usuario.user} onChange={this.manejarCambio} required />
          <input type="text" placeholder="Apellido P" name="userP" id="userP"
            onChange={this.manejarCambio} value={this.state.usuario.userP} required />
          <input type="text" placeholder="Apellido M" name="userM" id="userM"
            onChange={this.manejarCambio} value={this.state.usuario.userM} required />
          <select value={this.state.usuario.educacion} required
            onChange={e => {
              this.setState(state => {
                state.usuario.educacion = parseInt(e.target.value);
                state.validationError = e.target.value === "" ? "Debes seleccionar un nivel" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona tu nivel de educacion</option>
            {
              this.state.educaciones.map(ed =>
                <option value={ed.id_educacion} key={ed.id_educacion}> {ed.nivel} </option>
              )
            }
          </select>
          <input type="file" accept="image/png" onChange={this.convertirBase64} required />
          <div style={{ color: 'red', marginTop: '5px' }}>      {this.state.validationError}    </div>
          <input type="submit" id="submit" value="Crear cuenta"/>
          
        </form>
      </div >
    )
  };
}

export default withRouter(Registro);