import React from "react"
import Header from "../Components/Header/Header";
import Service from "../service";
import PerfilEmpresa from "../Components/Perfil/PerfilEmpresa";
import PerfilTalento from "../Components/Perfil/PerfilTalento";
import { withRouter } from 'react-router-dom';

class Perfil extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataState: '',
      values: null,
      type: '',
    }
  }

  datos() {

  }

  componentDidMount() {
    Service.getData("datos_perfil")
      .then(data => {
        if (data.status === "correct") {
          this.setState({
            values: data.values,
            type: data.type,
            dataState: data.status,
          })
        } else {
          this.setState({
            dataState: data.status,
          })
        }
      })
  }

  render() {
    let component;
    if (this.state.dataState === 'correct') {
      component = this.state.type === 'empresa' ?
        <PerfilEmpresa /> :
        <PerfilTalento />
    } else if (this.state.dataState === 'no-data') {
      this.props.history.push('/datosPerfil');
    }

    return (
      <div>
        <Header />
        <h1>Perfil</h1>
        {component}
      </div >
    )
  }
}

export default withRouter(Perfil);