import { Component } from "react"
import React from 'react';
 class Modulo extends Component {
  render(){
     return (
     <div className="card card-body">
        <form action="https://BackendAPICRUDMYSQLRU.juanperezu.repl.co/api/modulos/nuevo-modulo" method="POST">  
        <div className="form-group">
        <label>Modulo</label>
        <input type="text" className="form-control" name="modulo" placeholder="Módulo"/> 
        </div>
        <div className="form-group">
        <label>Prefijo</label>
        <input type="text" className="form-control" name="modprefijo"/> 
        </div>
       <button type ="submit" className="btn btn-link">Enviar</button>
      <button type ="submit" className="btn btn-link">Buscar</button>
      <button type ="submit" className="btn btn-link">Editar</button>
        </form>
        </div>
    );
    
  }
}
export default Modulo;