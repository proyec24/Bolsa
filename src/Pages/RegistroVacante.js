import React from "react";
import Service from "../service"
import { withRouter } from 'react-router-dom'


class RegistroVacante extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vacante: {
        salarioMin: 0,
        salarioMax: 0,
        descripcion: "",
        requisitos: "",
        responsabilidades: "",
        experiencia: 0,
        direccion: "",
        fecha: [],
        es_premium: false,
        educacion: 0,
        empresa: 0,
        municipio: 0,
        puesto: 0,
        categoria: 0,
        tipoTrabajo: 0,
        tipoSalario: 0,
      },
      educaciones: [],
      puestos: [],
      municipios: [],
      empresa: {},
      categorias: [],
      tiposTrabajos: [],
      tiposSalarios: [],
      validationError: ["", "", "", "", "", ""],
      nombreTipo: "",
      esRango: false,
    }

    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  manejarCambio(evento) {
    const valor = evento.target.value;
    const id = evento.target.id;
    console.log(this.state.vacante.es_premium)
    this.setState(state => {
      state.vacante[id] = valor;
      return state;
    })
  }

  onChangeRadio(e) {
    this.setState(state => {
      state.vacante.es_premium = e.target.value === "si";
      return state;
    })
  }

  manejarEnvio(evento) {
    evento.preventDefault();

    Service.postData("registraVacante", this.state.vacante)
      .then(data => {
        console.log(data);
      })
  }

  async componentDidMount() {
    const educaciones_ = await Service.getData("educaciones");
    const municipios_ = await Service.getData("municipios");
    const puestos_ = await Service.getData("puestos");
    const categorias_ = await Service.getData("categorias");
    const empresa_ = await Service.getData("empresaFromVacantes");
    const tiposTrabajo_ = await Service.getData("tipos_trabajos");
    const tiposSalario_ = await Service.getData("tipos_salarios");

    this.setState(state => {
      state.vacante.empresa = empresa_.id_empresa;
      state.vacante.fecha = new Date().toISOString().slice(0, 10);
      return state;
    })

    this.setState({
      educaciones: educaciones_,
      municipios: municipios_,
      puestos: puestos_,
      categorias: categorias_,
      empresa: empresa_,
      tiposTrabajos: tiposTrabajo_,
      tiposSalarios: tiposSalario_,
    })
  }

  render() {
    const salarioPlaceholder = this.state.esRango ? "Salario minimo" : "Salario";
    return (
      <div>
        <form onSubmit={this.manejarEnvio}>
          <p>Empresa: {this.state.empresa.nombre}</p>

          <p>Fecha de publicación: {this.state.vacante.fecha}</p>

          <h2>Tipo de salario</h2>
          <select value={this.state.vacante.tipoSalario} required
            onChange={e => {
              let nombre = e.target.options[e.target.selectedIndex].text;
              nombre = nombre === "Selecciona un tipo de salario" ? "" : nombre;
              this.setState(state => {
                state.vacante.tipoSalario = e.target.value;
                state.nombreTipo = nombre;
                state.validationError[5] = e.target.value === "" ? "Debes seleccionar un tipo de salario" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona un tipo de salario</option>
            {
              this.state.tiposSalarios.map(ed =>
                <option value={ed.id_tipo_salario} key={ed.id_tipo_salario}> {ed.tipo} </option>
              )
            }
          </select>

          <h2>Rango de salario? </h2>
          <input type="checkbox" defaultChecked={this.state.esRango}
            onChange={() => this.setState(state => {
              state.esRango = !state.esRango;
              return state;
            })} />

          <h2>Salario {this.state.nombreTipo}</h2>
          <input type="number" placeholder={salarioPlaceholder} name="salarioMin" id="salarioMin"
            value={this.state.vacante.salarioMin} onChange={this.manejarCambio} required></input>

          {this.state.esRango ? <input type="number" placeholder="Salario maximo" name="salarioMax" id="salarioMax"
            value={this.state.vacante.salarioMax} onChange={this.manejarCambio} required></input>
            : ""
          }

          <h2>Puesto del empleo</h2>
          <select value={this.state.vacante.puesto} required
            onChange={e => {
              this.setState(state => {
                state.vacante.puesto = e.target.value;
                state.validationError[0] = e.target.value === "" ? "Debes seleccionar un puesto" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona un puesto</option>
            {
              this.state.puestos.map(ed =>
                <option value={ed.id_puesto} key={ed.id_puesto}> {ed.nombre} </option>
              )
            }
          </select>

          <h2>Categoria del empleo</h2>
          <select value={this.state.vacante.categoria} required
            onChange={e => {
              this.setState(state => {
                state.vacante.categoria = e.target.value;
                state.validationError[1] = e.target.value === "" ? "Debes seleccionar una categoria" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona una categoria</option>
            {
              this.state.categorias.map(ed =>
                <option value={ed.id_categoria} key={ed.id_categoria}> {ed.nombre} </option>
              )
            }
          </select>

          <h2>Nivel de educación requerido</h2>
          <select value={this.state.vacante.educacion} required
            onChange={e => {
              this.setState(state => {
                state.vacante.educacion = e.target.value;
                state.validationError[2] = e.target.value === "" ? "Debes seleccionar un nivel de educacion" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona un nivel de educacion</option>
            {
              this.state.educaciones.map(ed =>
                <option value={ed.id_educacion} key={ed.id_educacion}> {ed.nivel} </option>
              )
            }
          </select>

          <h2>Municipio del empleo</h2>
          <select value={this.state.vacante.municipio} required
            onChange={e => {
              this.setState(state => {
                state.vacante.municipio = e.target.value;
                state.validationError[3] = e.target.value === "" ? "Debes seleccionar un municipio" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona un municipio</option>
            {
              this.state.municipios.map(ed =>
                <option value={ed.id_municipio} key={ed.id_municipio}> {ed.nombre} </option>
              )
            }
          </select>

          <h2>Tipo de trabajo</h2>
          <select value={this.state.vacante.tipoTrabajo} required
            onChange={e => {
              this.setState(state => {
                state.vacante.tipoTrabajo = e.target.value;
                state.validationError[4] = e.target.value === "" ? "Debes seleccionar un tipo de trabajo" : "";
                return state;
              })
            }}
          >
            <option value="">Selecciona un tipo de trabajo</option>
            {
              this.state.tiposTrabajos.map(ed =>
                <option value={ed.id_tipo_trabajo} key={ed.id_tipo_trabajo}> {ed.nombre} </option>
              )
            }
          </select>

          <h2>Direccion</h2>
          <input type="text" placeholder="Direccion" name="direccion" id="direccion"
            value={this.state.vacante.direccion} onChange={this.manejarCambio} required />

          <h2>Contratar servicio PREMIUM</h2>
          <label className="miro-radiobutton" required>
            <input type="radio" value="si" name="es_premium" id="es_premium"
              onChange={this.manejarCambio} defaultChecked={this.state.vacante.es_premium} />
            <span>Si</span>
          </label>
          <label className="miro-radiobutton">
            <input type="radio" value="no" name="es_premium" id="es_premium"
              onChange={this.manejarCambio} defaultChecked={!this.state.vacante.es_premium} />
            <span>No</span>
          </label>

          <h2>Descripción del empleo</h2>

          <p>
            Describa las responsabilidades de este empleo, la experiencia laboral, las habilidades o la educación necesarias.
            La descripción del empleo no deberá violar la "Ley Federal para Prevenir y Eliminar la Discriminación",
            la cual incluye discriminación de sexo, edad, origen, raza, color, estado civil, entre otros.
          </p>

          <textarea placeholder="Descripción" name="descripcion" id="descripcion" rows="15" cols="50" value={this.state.vacante.descripcion} onChange={this.manejarCambio} required />

          <textarea placeholder="Responsabilidades" name="responsabilidades" id="responsabilidades" rows="15" cols="50"
            value={this.state.vacante.responsabilidades} onChange={this.manejarCambio} required />

          <textarea placeholder="Requisitos" name="requisitos" id="requisitos" rows="15" cols="50"
            value={this.state.vacante.requisitos} onChange={this.manejarCambio} required />

          <h2>Años de experiencia</h2>
          <input type="number" placeholder="Años de experiencia" name="experiencia" id="experiencia"
            value={this.state.vacante.experiencia} onChange={this.manejarCambio} required />

          <input type="submit" id="submit" value="Crear vacante" />

          {this.state.validationError.map(item =>
            <span className="error"> {item} </span>
          )
          }

        </form>
      </div>
    )
  };



}

export default withRouter(RegistroVacante);