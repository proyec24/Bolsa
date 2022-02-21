import React from "react";
import Service from "../service"
import  { withRouter } from 'react-router-dom'

class RegistroEmpresa extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      empresa:{
        userName : "",
        pass : "",
        nomEmp : "",
        correo : "",
        imagen : "",
      }
    }
    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.convertirBase64 = this.convertirBase64.bind(this);
  }

  manejarCambio(evento){
    const valor = evento.target.value;
    const id = evento.target.id;
     this.setState(state=>{
       state.empresa[id] = valor;
       console.log(state);
       return state;
     })
    } 
    
    async manejarEnvio(evento){
      evento.preventDefault();
      let dato = await Service.postData("registraEmpresa", this.state.empresa);
      if(dato.status){
        this.props.history.push('/login');
      }
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

    this.setState(state=>{
      state.empresa.imagen = base64;
      return state;
    })
  }

  render(){
    return(
    <div>
      <form onSubmit = {this.manejarEnvio}>
        <input type="text" placeholder="Nombre de Usuario" name="userName" id="userName" value={this.state.empresa.userName} onChange={this.manejarCambio} required/>
        <span id="userStatus"></span>
        <input type="password" placeholder="Contraseña"name="pass" id="pass" value = {this.state.empresa.pass} onChange={this.manejarCambio} required/>
        <input type="text" placeholder="Nombre de la Empresa" name="nomEmp" id="nomEmp" value = {this.state.empresa.nomEmp} onChange={this.manejarCambio} required/>
        <input type="mail" placeholder="Correo" name="correo" id="correo" value ={this.state.empresa.correo} onChange={this.manejarCambio} required/>
        <span id="mailStatus"></span>
        <input type="file" accept="image/png" onChange={this.convertirBase64} required/>
        <input type="submit" id="submit" value="Crear cuenta de empresa"></input>
      </form>
    </div>
    )
  };



}

export default withRouter(RegistroEmpresa);