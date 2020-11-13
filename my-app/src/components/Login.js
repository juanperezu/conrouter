import { Component } from "react"
import React from 'react';
 class Login extends Component {
  render(){
     return (
     <div className="card card-body">
        <form>
        <div className="form-group">
        <label>Usuario</label>
        <input type="text" className="form-control"/> 
        </div>
       <div className="form-group">
        <label>Clave</label>
        <input type="password" className="form-control"/> 
        </div>
      <button type ="submit" className="btn btn-primary">Enviar</button>

        </form>
        </div>
    );
    
  }
}
export default Login;