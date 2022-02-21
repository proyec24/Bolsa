import React from "react"
import DatosEmpresa from "../Components/Perfil/DatosEmpresa";
import DatosTalento from "../Components/Perfil/DatosTalento";

class DatosPerfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpresa: null,
    }

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(e) {
    this.setState({
      isEmpresa: e.target.value === 'Empresa',
    })
  }
  render() {
    let form;
    if (this.state.isEmpresa) {
      form = <DatosEmpresa />;
    } else if (this.state.isEmpresa === false) {
      form = <DatosTalento />;
    }
    return (
      <div>
        <input type="radio" value="Empresa" name="tipo" onChange={this.onChangeValue} /> Empresa
        <input type="radio" value="Talento" name="tipo" onChange={this.onChangeValue} /> Talento
        {form}
      </div>
    );
  }
}


export default DatosPerfil;