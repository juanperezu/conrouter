import { Component } from "react"
import React from 'react';
 class Formulario extends Component {
  render(){
     return (
     <div className="card card-body">
        <form> 
        <div className="form-group">
        <label>Usuario</label>
        <input type="text" className="form-control" placeholder="Usuario"/> 
        </div>
        <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control"/> 
        </div>
       <div className="form-group">
        <label>Clave</label>
        <input type="password" className="form-control"/> 
        </div>
      <button type ="submit" className="btn btn-link">Enviar</button>
      <button type ="submit" className="btn btn-link">Buscar</button>
      <button type ="submit" className="btn btn-link">Editar</button>
        </form>
        </div>
    );
    
  }
}
export default Formulario;