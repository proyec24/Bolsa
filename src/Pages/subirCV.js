import React from "react";
import Service from "../service"
import  { withRouter } from 'react-router-dom'

class subirCV extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cv:{
        archivo : "",
      }
    }
    
    this.manejarEnvio = this.manejarEnvio.bind(this);
    this.convertirBase64 = this.convertirBase64.bind(this);
  }

    async manejarEnvio(evento){
      evento.preventDefault();
      let dato = await Service.postData("upload_cv", this.state.cv);
      if(dato.status){
        
      }
    }

  async convertirBase64(e) { 
    if (!(/\.(pdf)$/i).test(e.target.files[0].name)) {
     e.target.value = null;
      return alert('El archivo a adjuntar no es un PDF');
  }
    const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });

    this.setState(state=>{
      state.cv.archivo = base64;
      return state;
    })
    console.log(this.state.cv.archivo)
  }

  render(){
    return(
    <div>
      <form onSubmit = {this.manejarEnvio}>
        <input type="file" accept="application/pdf" onChange={this.convertirBase64} required/>
        <input type="submit" id="submit" value="Subir CV"></input>
      </form>
    </div>
    )
  };



}

export default withRouter(subirCV);