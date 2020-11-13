import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Acerca from './components/Acerca';
import Login from './components/Login';
import Formulario from './components/Formulario';
import  milogo from './imagenes/actores.png';
import Modulo from './components/Modulo';
export default function App() {
  return (
    <Router>
      <div className="container p-3 my-3">
        <div className="btn-group">
         <ul>
          <li><Link to="/" className="btn btn-primary" > Home</Link>
          </li>
          <li>
            <Link to="/about" className="btn btn-primary" >Acerca</Link>
          </li>
          <li>
            <Link to="/login" className="btn btn-primary" >Login</Link>
          </li>

          <li>
            <Link to="/formulario" className="btn btn-primary" >Form</Link>
          </li>
          <li>
            <Link to="/modulo" className="btn btn-primary" >Módulo</Link>
          </li>
        
        </ul>
        </div>
       <img  src={milogo}  width="80%" height="10%"/>     
        <hr/>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Acerca/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/formulario">
            <Formulario/>
          </Route>
          <Route path="/modulo">
            <Modulo/>
          </Route>

      
        </Switch>
      
      </div>
      
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
     <div className="card card-body">
      <h2>Home</h2>
    </div>
  );
}

/*function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
*/
/*
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
 } */
